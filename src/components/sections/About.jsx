import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const buildProtocols = [
    "3D Printing",
    "Assembly",
    "Electrode Fabrication",

  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Usage
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Description.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Protocols</h3>
                <div className="flex flex-wrap gap-2">
                  {buildProtocols.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Author: </h3>
                <li>
                  <strong> Department of Chemical Engineering </strong> MIT 2025
                </li>
                <li>
                  Designed by: 
                  {/* Social Media Icons */}
                  <div className="flex gap-4 pt-2">
                    {/* GitHub */}
                    <a href="https://github.com/swath1pen" target="_blank" rel="noopener noreferrer">
                      <img src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/github_logo.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
                    </a>
                    {/* ORCID */}
                    <a href="https://orcid.org/0000-0001-7566-8767" target="_blank" rel="noopener noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/ORCID_iD.svg" alt="ORCID" className="w-8 h-8 hover:scale-110 transition" />
                    </a>
                    {/* BlueSky */}
                    <a href="https://bsky.app/profile/swath1.bsky.social" target="_blank" rel="noopener noreferrer">
                      <img src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/bluesky_logo.png" alt="GitHub" className="w-10 h-8 hover:scale-110 transition" />
                    </a>
                    {/* GScholar */}
                    <a href="https://scholar.google.com/citations?user=QiISpWMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                      <img src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/google_scholar_logo.png" alt="ORCID" className="w-8 h-8 hover:scale-110 transition" />
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/swathi-penumutchu-135450b1" target="_blank" rel="noopener noreferrer">
                      <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" />
                    </a>
                    {/* Research Gate */}
                    <a href="https://www.researchgate.net/profile/Swathi_Penumutchu" target="_blank" rel="noopener noreferrer">
                      <img src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/research_gate_logo.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" />
                    </a>
                  </div>
                </li>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Cite </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">See Build GitHub Repo for citation details.</h4>

                </div>
                  {/* Social Media Icons */}
                  <div className="flex gap-4 pt-2">
                    {/* GitHub */}
                    <a href="https://github.com/swath1pen/bioreactor" target="_blank" rel="noopener noreferrer">
                      <img src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/github_logo.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
                    </a>
                    {/* BioEchemBuilds */}
                    <a href="https://furstlab.github.io/BioEchemBuilds/" target="_blank" rel="noopener noreferrer">
                      <img src="https://raw.githubusercontent.com/swath1pen/bioreactor/main/logos/bioechem_logo.png" alt="GitHub" className="w-50 h-12 hover:scale-110 transition" />
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
