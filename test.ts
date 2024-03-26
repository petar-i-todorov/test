type Config = {
  endpoint: string;
  method: "GET" | "POST" | "whatever";
  timeout: number;
  cache: boolean;
};

const config = {
  endpoint: "https://api.example.com",
  method: "GET",
  timeout: 1000,
  cache: true,
} satisfies Config;

// the return type is
// {
//   endpoint: string;
//   method: "GET";
//   timeout: number;
//   cache: true;
// }
