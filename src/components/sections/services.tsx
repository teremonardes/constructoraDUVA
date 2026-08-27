import {
  BuildingStorefrontIcon,
  HomeIcon,
  BuildingOffice2Icon,
  BoltIcon,
  WrenchScrewdriverIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

import Container from "@/src/components/ui/container";
import SectionTitle from "@/src/components/ui/SectionTitle";

const services = [
  {
    title: "DS 27 — Equipamiento Comunitario",
    icon: BuildingStorefrontIcon,
  },
  {
    title: "DS 27 — Proyectos para la Vivienda",
    icon: HomeIcon,
  },
  {
    title: "DS 27 — Condominios de Vivienda",
    icon: BuildingOffice2Icon,
  },
  {
    title: "DS 27 — Eficiencia Energética e Hídrica",
    icon: BoltIcon,
  },
  {
    title: "DS 49 — Construcción en Sitio Propio",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Obras Civiles",
    icon: BuildingLibraryIcon,
  },
];

export default function ServiciosPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Desarrollamos proyectos habitacionales, urbanos y de infraestructura con foco en la calidad, la eficiencia y el impacto social."
        />

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex flex-col items-center text-center"
              >
                <Icon className="mb-5 h-12 w-12 text-[var(--primary)] stroke-[1.5]" />

                <h3 className="max-w-[220px] text-lg font-semibold leading-tight text-gray-700">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}