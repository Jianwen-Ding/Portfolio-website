// The band you scroll past between sections. Flanking rules give it something
// to look at without turning it into a second navigation bar.
export default function SectionHeader({ title }) {
  return (
    <h2 className="sectionHeader">
      <span className="sectionHeader__rule" aria-hidden="true" />
      <span className="sectionHeader__title">{title}</span>
      <span className="sectionHeader__rule" aria-hidden="true" />
    </h2>
  );
}
