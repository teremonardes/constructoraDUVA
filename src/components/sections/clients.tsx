"use client";
import Container from "../../components/ui/container";
import SectionTitle from "../../components/ui/SectionTitle";
import InfoCard from "../../components/ui/InfoCard";
import Image from "next/image";
import {
  UsersIcon,
  BuildingOffice2Icon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

const logos = [
  {
    name: "QL",
    src: "/images/logos/ql.png",
    width: 90,
    height: 90,
  },
  {
    name: "La Pintana",
    src: "/images/logos/pintana.png",
    width: 90,
    height: 120,
  },
  {
    name: "SERVIU",
    src: "/images/logos/serviu.png",
    width: 180,
    height: 90,
  },
];

export default function ClientesSection() {
  return (
    <main>
      <section className="py-12">
        <Container>
          <SectionTitle
            title="Nuestros Clientes y Aliados"
            subtitle="En Sociedad Constructora DUVA, entendemos que levantar un proyecto habitacional o social requiere de un trabajo en equipo transparente y comprometido."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <InfoCard
              icon={UsersIcon}
              delay={0.4}
              title="Nuestros Beneficiarios"
              description="Las familias y los comités de vivienda son el corazón y la razón de ser de nuestro trabajo. Son socios activos en el codiseño de sus futuros hogares y entornos; sus sueños, esfuerzo e inquietudes guían cada decisión que tomamos en terreno."
            />

            <InfoCard
              icon={BuildingOffice2Icon}
              delay={0.4}
              title="Entidades Patrocinantes"
              description="Trabajamos codo a codo con las entidades que gestionan los proyectos frente al MINVU. Nos integramos como un socio técnico riguroso, eficiente y confiable."
            />

            <InfoCard
              icon={BuildingLibraryIcon}
              delay={0.4}
              title="Municipalidades y Organismos Públicos"
              description="Trabajamos en conjunto con los municipios para acelerar y sacar adelante proyectos habitacionales, convirtiéndonos en un aliado técnico estratégico."
            />
          </div>
          <div className="mt-20 border-t border-gray-200 pt-12">
            <h3 className="mb-10 text-center text-xl font-semibold text-gray-700">
              Algunos de nuestros principales clientes y aliados
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-12">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-28 w-48 items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="
            max-h-24
            w-auto
            object-contain
            grayscale
            opacity-70
            transition-all
            duration-300
            hover:grayscale-0
            hover:opacity-100
            hover:scale-105
          "
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
