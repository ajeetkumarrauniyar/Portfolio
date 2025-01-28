export function SocialLinks() {
  const socialLinks = [
    { icon: 'github', label: 'GitHub' },
    { icon: 'linkedin', label: 'LinkedIn' },
    { icon: 'envelope', label: 'Email', prefix: 'fas' },
    { icon: 'twitter', label: 'Twitter' },
  ];

  return (
    <div className="mt-20 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
      {socialLinks.map(({ icon, label, prefix = 'fab' }) => (
        <div key={label}>
          <i
            className={`${prefix} fa-${icon} mb-4 cursor-pointer text-4xl text-gray-400 transition-colors hover:text-white`}
          ></i>
          <p className="text-sm text-gray-400">{label}</p>
        </div>
      ))}
    </div>
  );
}
