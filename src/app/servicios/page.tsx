type Service = {
  slug: string;
  title: string;
  short: string;
  features: string[];
};

const services: Service[] = [
  {
    slug: "mantenimiento-it",
    title: "Mantenimiento IT",
    short: "Soporte preventivo y correctivo para tu parque informático.",
    features: ["Inventario y actualización", "Monitorización", "Soporte remoto/presencial"],
  },
  {
    slug: "redes-seguras",
    title: "Redes y Seguridad",
    short: "Diseño de redes, VLAN, VPN, firewalls FortiGate.",
    features: ["Segmentación", "Acceso remoto seguro", "Políticas y auditoría"],
  },
  {
    slug: "copias-backup",
    title: "Backups y Recuperación",
    short: "Estrategias de copia y restauración (NAS, nube, Veeam...).",
    features: ["3-2-1", "Pruebas de restauración", "Alertas y reporting"],
  },
  {
    slug: "cloud-m365",
    title: "Cloud y Microsoft 365",
    short: "Email, colaboración y gestión de identidades.",
    features: ["Exchange/Teams", "Azure AD / Entra ID", "Políticas de seguridad"],
  },
];

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Servicios</h1>
      <p className="mt-2 text-gray-700">
        Presentamos nuestros servicios como productos informativos. Solicita una propuesta a medida.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.slug} className="rounded-xl border bg-white p-6">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-gray-700">{s.short}</p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              {s.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="/contacto" className="mt-4 inline-block rounded-md border px-4 py-2">
              Solicitar información
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
