export default function Login() {
  return (
    <>
      <div class="bg-white flex items-center justify-center h-[calc(100vh-63px)]">
        <div class="w-full max-w-md px-6 py-12 space-y-6">
          <div class="text-center">
            <h1 class="text-2xl font-bold text-gray-900">Welcome back</h1>
            <p class="mt-1 text-sm text-gray-600">
              Sign in to continue your StyleHub journey.
            </p>
          </div>

          <form class="space-y-5">
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
              />
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
              />
            </div>

            <div class="text-right">
              <a
                href="#"
                class="text-sm font-medium text-black hover:underline"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              class="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
            >
              Sign In
            </button>
          </form>

          <div class="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" class="font-medium text-black hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <footer class="text-center py-4 text-lg text-gray-400 border-t-2 border-gray-400/20">
        © 2024 StyleHub. All rights reserved.
      </footer>
    </>
  );
}
