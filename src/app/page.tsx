export default function Home() {
  async function handleSubmit(data: FormData) {
    "use server";

    const name = data.get("name");
    const age = data.get("age");

    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    });

    console.log(await response.json());
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        action={handleSubmit}
        className="w-full max-w-md bg-zinc-950 border border-zinc-800 p-8 rounded-xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-purple-500">
            Cadastro de Usuário
          </h1>

          <p className="text-zinc-400 mt-2 text-sm">
            Preencha os dados abaixo para cadastrar um usuário.
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="name"
            className="text-sm font-medium text-zinc-200"
          >
            Nome
          </label>

          <input
            type="text"
            name="name"
            id="name"
            required
            className="h-11 bg-zinc-900 border border-zinc-700 text-white px-4 rounded-md outline-none focus:border-purple-500 placeholder:text-zinc-500"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="flex flex-col gap-2 mb-7">
          <label
            htmlFor="age"
            className="text-sm font-medium text-zinc-200"
          >
            Idade
          </label>

          <input
            type="number"
            name="age"
            id="age"
            min="0"
            required
            className="h-11 bg-zinc-900 border border-zinc-700 text-white px-4 rounded-md outline-none focus:border-purple-500 placeholder:text-zinc-500"
            placeholder="Digite sua idade"
          />
        </div>

        <button
          type="submit"
          className="w-full h-11 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-md transition"
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}