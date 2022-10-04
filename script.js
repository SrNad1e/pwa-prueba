  if (
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined"
  ) {
      if ("serviceWorker" in window.navigator) {
          window.navigator.serviceWorker
              .register("/sw.js")
              .then((reg) => console.log("Registro de SW exitoso", reg))
              .catch((err) =>
                  console.warn("Error al tratar de registrar el sw", err)
              );
      }
  }