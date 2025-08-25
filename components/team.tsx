export default function Team() {
  const teamMembers = [
    {
      name: "Prince Dormenyo",
      role: "Founder & Executive Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description:
        "Visionary leader dedicated to empowering students through education and skill development.",
    },
    {
      name: "Miss Theodora",
      role: "Program Coordinator",
      image:
        "https://images.unsplash.com/photo-1749700332246-b4fedd192b11?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Experienced educator passionate about creating impactful learning experiences.",
    },
    {
      name: "Evans Elabo",
      role: "Skills Development Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description:
        "Professional trainer focused on bridging the gap between education and employment.",
    },
    {
      name: "Grace Asante",
      role: "Community Outreach Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      description:
        "Community advocate committed to expanding our reach and impact across Ghana.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We currently have two separate teams working together to achieve our
            goals. We have a 14 executive team and 120 volunteers across the
            country.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx + 1} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-ngo-green rounded-full opacity-0 group-hover:opacity-10 transition-opacity w-32 h-32 mx-auto"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-green-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for passionate individuals to join our
              mission of empowering tomorrow's leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white p-6 rounded-xl text-center flex-1 max-w-xs">
                <h4 className="font-bold text-gray-900 mb-2">
                  Volunteer Opportunities
                </h4>
                <p className="text-gray-600 text-sm">
                  Join our 120+ volunteers making a difference across Ghana
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center flex-1 max-w-xs">
                <h4 className="font-bold text-gray-900 mb-2">
                  Executive Positions
                </h4>
                <p className="text-gray-600 text-sm">
                  Leadership roles in our executive team of 14 dedicated members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
