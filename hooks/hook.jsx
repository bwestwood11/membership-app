import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";

export function withPublic(Component) {
	return function WithPublic(props) {
		const auth = useUserAuth();
		const router = useRouter();

	useEffect(() => {
		if (auth.user) {
			router.replace("/");
		}
	}, [])
		
		
	};
}

export function withProtected(Component) {
	return function WithProtected(props) {
		const auth = useUserAuth();
		const router = useRouter();

		useEffect(() => {
		  if (!auth.user) {
			router.replace("/login");
			}
		
		
		}, [])
		 
		}
		return <Component auth={auth} {...props} />;
	};
