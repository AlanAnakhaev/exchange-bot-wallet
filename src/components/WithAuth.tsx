import { useRouter } from "next/navigation";
import { useEffect } from "react";

const WithAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithAuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem("sign-up");
      if (!token) {
        router.push("/login");
      }
    }, [router]);

    return <WrappedComponent {...(props as P)} />;
  };

  return WithAuthComponent;
};

export default WithAuth;
