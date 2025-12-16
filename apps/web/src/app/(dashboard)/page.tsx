export default function Home() {
	return (
		<div className="space-y-6">
			<h1 className="text-4xl font-bold">Welcome to Reality Ware</h1>
			<p className="text-lg text-gray-600">
				Explore amazing projects and experiences from the Hack Club community.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<a
					href="/hub"
					className="p-6 border rounded-lg hover:shadow-lg transition"
				>
					<h2 className="text-xl font-semibold mb-2">Hub</h2>
					<p>Connect with the community</p>
				</a>
				<a
					href="/projects"
					className="p-6 border rounded-lg hover:shadow-lg transition"
				>
					<h2 className="text-xl font-semibold mb-2">Projects</h2>
					<p>Discover amazing projects</p>
				</a>
				<a
					href="/gallery"
					className="p-6 border rounded-lg hover:shadow-lg transition"
				>
					<h2 className="text-xl font-semibold mb-2">Gallery</h2>
					<p>View project galleries</p>
				</a>
				<a
					href="/voting"
					className="p-6 border rounded-lg hover:shadow-lg transition"
				>
					<h2 className="text-xl font-semibold mb-2">Voting</h2>
					<p>Vote for your favorites</p>
				</a>
			</div>
		</div>
	);
}
