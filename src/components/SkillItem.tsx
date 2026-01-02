interface SkillItemProps {
	icon: string;
	label: string;
}

export default function SkillItem({ icon, label }: SkillItemProps) {
  return (
    <li className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center sm:items-start text-nowrap text-center sm:text-left">
      <img src={icon} alt={label} className="w-8 md:w-9" />
      <span className="text-sm sm:text-lg">{label}</span>
    </li>
  )
}