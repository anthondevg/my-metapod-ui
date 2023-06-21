async function login(email: string, password: string) {
  return new Promise((resolve) => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res: any) =>
        res.json().then((data: any) => ({ status: res.status, body: data }))
      )
      .then((data: any) => {
        resolve(data);
      });
  });
}

export default login;
