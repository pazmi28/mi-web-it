export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold">
            Soporte y soluciones informáticas para tu negocio
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            Mantenimiento, redes, ciberseguridad, copias de seguridad y cloud.
            Servicio remoto y presencial.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/servicios" className="rounded-md bg-black text-white px-5 py-3">Ver servicios</a>
            <a href="/contacto" className="rounded-md border px-5 py-3">Contactar</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-6">
        {[
          { t: "Respuesta rápida", d: "SLA y canal directo de soporte." },
          { t: "Seguridad primero", d: "FortiGate, backups, endurecimiento." },
          { t: "Escalabilidad", d: "Soluciones a medida para crecer." },
        ].map((c) => (
          <div key={c.t} className="rounded-xl border bg-white p-6">
            <h3 className="font-semibold">{c.t}</h3>
            <p className="mt-2 text-gray-700">{c.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
