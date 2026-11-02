export interface PasswordRequestDto {
  length: number;
  include_uppercase: boolean;
  include_lowercase: boolean;
  include_numbers: boolean;
  include_symbols: boolean;
}

export interface PasswordResponseDto {
  password: string;
  length: number;
}
