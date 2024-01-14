function LinkButton({ href, label, children }) {
	return (
		href && (
			<a
				href={href}
				aria-label={label}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span type="button" className="btn btn--outline">
					{children}
				</span>
			</a>
		)
	);
}

export default LinkButton;
