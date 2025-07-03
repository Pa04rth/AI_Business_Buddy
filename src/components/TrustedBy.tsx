
const TrustedBy = () => {
  const companies = [
    { name: 'NVIDIA', logo: 'NVIDIA' },
    { name: 'Column', logo: 'column' },
    { name: 'GitHub', logo: 'GitHub' },
    { name: 'Nike', logo: 'Nike' },
    { name: 'Lemon Squeezy', logo: 'lemon squeezy' },
    { name: 'Laravel', logo: 'Laravel' },
    { name: 'Lilly', logo: 'Lilly' },
    { name: 'OpenAI', logo: 'OpenAI' }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 lg:gap-16 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={company.name}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-white font-medium text-lg whitespace-nowrap">
                {company.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
