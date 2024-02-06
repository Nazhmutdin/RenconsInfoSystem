from jose import jwt
from passlib.context import CryptContext
from fastapi import HTTPException, status
from pydantic import BaseModel, Field, ConfigDict

from app.shemas.user_shemas import BaseUserShema
from app.repositories import UserRepository
from app.settings import Settings
from app.errs import UserNotFoundError, InvalidPasswordError


class UserAuthData(BaseModel):
    login: str
    password: str


class TokenData(BaseModel):
    login: str
    password: str


class Token(BaseModel):
    access_token: str


ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

user_repo = UserRepository()

crypt_ctx = CryptContext(["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    return crypt_ctx.hash(password)


def verify_password(password: str, hashed_password: str) -> bool:
    return crypt_ctx.verify(password, hashed_password)


def create_access_token(user_data: UserAuthData) -> str:
    return jwt.encode(
        {
            "login": user_data.login,
            "password": user_data.password
        },
        Settings.SECRET_KEY(),
        algorithm=ALGORITHM
    )


def check_user_in_db(login: str) -> bool:
    return bool(UserRepository().get(login))


def read_token(token: Token) -> TokenData:
    return TokenData(**jwt.decode(token.access_token, Settings.SECRET_KEY(), ALGORITHM))


def get_user(login: str, password: str) -> BaseUserShema:
    user = UserRepository().get(login)

    if not user:
        raise UserNotFoundError(login)
    
    if not verify_password(password, user.hashed_password):
        raise InvalidPasswordError(password)
    
    return BaseUserShema.model_validate(user, from_attributes=True)
