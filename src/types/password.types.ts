export interface RandomGenParams {
  length: number;
  include_uppercase?: boolean;
  include_lowercase?: boolean;
  include_numbers?: boolean;
  include_symbols?: boolean;
}

export interface PasswordRequestDto extends RandomGenParams {

}

export interface PasswordResponseDto {
  password: string;
  length: number;
}
