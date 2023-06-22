"use client";
import { useRouter } from "next/navigation";

const protectedRoute = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      router.replace("/login");
    }

    return <WrappedComponent {...props} />;
  };
};

export default protectedRoute;
