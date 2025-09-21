export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Contacto</h1>
      <p className="mt-2 text-gray-700">Cuéntanos qué necesitas y te respondemos pronto.</p>

      <form
        action="https://formsubmit.co/TU_EMAIL@DOMINIO.COM"
        method="POST"
        className="mt-6 space-y-4"
      >
        {/* opciones de FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nuevo contacto desde la web" />
        <input type="hidden" name="_template" value="table" />
        {/* redirigir tras enviar: */}
        <input type="hidden" name="_next" value="https://TU-DOMINIO.com/contacto?ok=1" />

        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input required name="nombre" className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input required type="email" name="email" className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Mensaje</label>
          <textarea required name="mensaje" rows={5} className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <button className="rounded-md bg-black text-white px-5 py-3">Enviar</button>
      </form>
    </div>
  );
}
