import { useState } from 'react';
import { Github, Users, CreditCard } from 'lucide-react';

interface TeamMember {
  name: string;
  cedula: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Maria Fernanda Suarez', cedula: 'V-30.015.773' },
  { name: 'Josue Carrero', cedula: 'V-30.157.739' },
  { name: 'Jac Marquez', cedula: 'V-29.710.631' },
  { name: 'Veruzka Alvarez', cedula: 'V-27.794.297' },
];

export const Footer = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const handleMemberClick = (cedula: string) => {
    setSelectedMember(selectedMember === cedula ? null : cedula);
  };

  return (
    <footer className="bg-slate-800 text-slate-300 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-teal-400" />
              <h3 className="text-lg font-semibold text-white">Equipo de Desarrollo</h3>
            </div>
            <div className="space-y-2">
              {teamMembers.map((member) => (
                <div key={member.cedula}>
                  <button
                    onClick={() => handleMemberClick(member.cedula)}
                    className="text-sm text-teal-400 hover:text-teal-300 transition-colors text-left w-full flex items-center space-x-2 py-1"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>{member.name}</span>
                  </button>
                  {selectedMember === member.cedula && (
                    <div className="ml-6 mt-1 bg-slate-700 rounded px-3 py-2 text-xs text-slate-300 animate-fade-in">
                      Cédula: {member.cedula}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-4">            
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Github className="w-5 h-5 text-teal-400" />
              <h3 className="text-lg font-semibold text-white">Repositorio</h3>
            </div>
            <a
              href="https://github.com/mafsuarezz/ProyectoIA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors text-sm inline-flex items-center space-x-1"
            >
              <span>Ver código fuente en GitHub</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-xs text-slate-400">
            © 2025 Sistema de Predicción de Riesgo de Cáncer. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-500 mt-2">           
          </p>
        </div>
      </div>
    </footer>
  );
};
