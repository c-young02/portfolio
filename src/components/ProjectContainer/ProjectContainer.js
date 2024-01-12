import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <img className='project__image' src={project.image} alt={project.name} />
    <h3>{project.name}</h3>
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span type='button' className='btn btn--outline'>
          Live Link
        </span>
      </a>
    )}
    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span type='button' className='btn btn--outline'>
          Code Link
        </span>
      </a>
    )}
  </div>
)

export default ProjectContainer
