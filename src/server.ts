import express from 'express';
import cors from 'cors';
import {
  UsernameRequestDto,
  UsernameResponseDto,
} from './types/username.types';
import { generateRandom } from './random';
import { PasswordRequestDto } from './types/password.types';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// 'GET /': Welcome message
app.get('/', (_, res) => {
  res.status(200).send('Hello world !');
});
// 'POST /username': Send username suggestions
app.post('/username', (req, res) => {
  const request = req.body as UsernameRequestDto;
  const name = request.name.toLowerCase();

  const response = {
    usernames: [
      `${name}_${generateRandom({ include_numbers: true, length: 2 })}`,
      `real.${name}`,
      `${name}_dev`,
      `${name}${generateRandom({ include_numbers: true, length: 3 })}`,
    ],
  } as UsernameResponseDto;

  res.status(200).json(response);
});
// 'POST /password': Generate random password
app.post('/password', (req, res) => {
  const request = req.body as PasswordRequestDto;

  if (request.length <= 0) {
    res.status(400).json({
      error: '"length" must be greater than zero',
    });
    return;
  }

  if (
    !request.include_lowercase &&
    !request.include_uppercase &&
    !request.include_numbers &&
    !request.include_symbols
  ) {
    res.status(400).json({
      error: 'No character type was specified',
    });
    return;
  }

  const response = generateRandom(request);
  res.status(200).json(response);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
