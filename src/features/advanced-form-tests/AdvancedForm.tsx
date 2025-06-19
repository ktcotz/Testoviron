import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  login: z.string().min(5, "Login must be at least 5 characters"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

type FormData = {
  login: string;
  password: string;
};

export const AdvancedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [user, setUser] = useState<FormData | null>(null);

  const onSubmit = (data: FormData) => {
    setUser(data);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-2 max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="login">Login</label>
          <input
            id="login"
            type="text"
            className="bg-slate-950 p-2 rounded-md text-stone-50"
            {...register("login")}
          />
          {errors.login && <p>{errors.login.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="bg-slate-950 p-2 rounded-md text-stone-50"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button>Submit</button>
      </form>

      {user && <div>{user.login}</div>}
    </div>
  );
};
