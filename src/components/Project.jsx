import { asset } from '../asset.js';
import { LINK_LOGOS } from '../data/portfolio.js';
import ProjectInfo from './ProjectInfo.jsx';

function ExternalLinks({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div style={{ display: 'flex' }}>
      {links.map((link) => {
        const logo = LINK_LOGOS[link.type];
        return (
          <a key={link.href} href={link.href} className="externalLink">
            <img src={asset(logo.src)} alt={logo.alt} />
          </a>
        );
      })}
    </div>
  );
}

function TitleImage({ image }) {
  return (
    <div className="titleHolder">
      <div className="titleBorder">
        <img src={asset(image.src)} alt={image.alt} style={image.style} />
      </div>
    </div>
  );
}

function Description({ project }) {
  return (
    <>
      <h3 className="projectTitle">{project.title}</h3>
      <h4 className="projectDesc">{project.subtitle}</h4>
      {project.meta.map((entry) => (
        <p key={entry.label} className="projectOverview">
          <b>{entry.label}</b> {entry.value}
        </p>
      ))}
      <ExternalLinks links={project.links} />
    </>
  );
}

export default function Project({ project }) {
  const { header } = project;

  return (
    <div>
      <p className="idHolder" id={project.id}>
        <br />
      </p>

      {header ? (
        // Wider description column, as in the original markup for this entry.
        <>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: header.titleFlex }}>
              <TitleImage image={project.image} />
            </div>
            <div style={{ flex: header.descriptionFlex }}>
              <div style={{ paddingLeft: header.descriptionPadding }}>
                <Description project={project} />
              </div>
            </div>
          </div>
          <div style={{ height: '20px' }} />
        </>
      ) : (
        <div className="project">
          <TitleImage image={project.image} />
          <div className="description">
            <Description project={project} />
          </div>
        </div>
      )}

      <ProjectInfo tabs={project.tabs} panelStyle={project.panelStyle} slidesStyle={project.slidesStyle} />
    </div>
  );
}
