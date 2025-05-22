interface SkillItemProps {
	icon: string;
	label: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, label }) => (
	<li className="flex flex-col md:flex-row gap-3 text-nowrap brightness-125">
		<img src={icon} alt={label} className="w-8 md:w-10" />
		<span className="text-sm sm:text-lg">{label}</span>
	</li>
);

export default SkillItem;
