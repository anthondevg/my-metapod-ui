"use client";
import { useRouter } from "next/navigation";

const loginRoute = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();

    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        router.replace("/dashboard");
      }
    }

    return <WrappedComponent {...props} />;
  };
};

export default loginRoute;
