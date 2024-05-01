import uniqid from 'uniqid';
import './ProjectContainer.css';
import LinkButton from '../LinkButton/LinkButton';

const ProjectContainer = ({ project }) => (
	<div className="project">
		<img className="project__image" src={project.image} alt={project.name} />
		<h3>{project.name}</h3>
		<p className="project__description">{project.description}</p>
		{project.stack && (
			<ul className="project__stack">
				{project.stack.map((item) => (
					<li key={uniqid()} className="project__stack-item">
						{item}
					</li>
				))}
			</ul>
		)}
		<div className="project__button-container">
			{project.livePreview && (
				<LinkButton href={project.livePreview} label="live preview">
					Live Link
				</LinkButton>
			)}
			{project.videoLink && (
				<LinkButton href={project.videoLink} label="live preview">
					Video Link
				</LinkButton>
			)}
			<LinkButton href={project.sourceCode} label="source code">
				Code Link
			</LinkButton>
		</div>
	</div>
);

export default ProjectContainer;
