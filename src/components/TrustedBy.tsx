
const TrustedBy = () => {
  const companies = [
    { name: 'NVIDIA', logo: 'NVIDIA' },
    { name: 'Column', logo: 'column' },
    { name: 'GitHub', logo: 'GitHub' },
    { name: 'Nike', logo: 'Nike' },
    { name: 'Lemon Squeezy', logo: '🍋 lemon squeezy' },
    { name: 'Laravel', logo: 'Laravel' },
    { name: 'Lilly', logo: 'Lilly' },
    { name: 'OpenAI', logo: '◉ OpenAI' }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-writeforge-gray text-lg">Trusted by leading companies worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={company.name}
              className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-white font-medium text-sm whitespace-nowrap">
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
