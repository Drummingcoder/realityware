import React from 'react';

const ExternalLinkIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const CodeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export default function HubPage() {
  // Placeholder data
  const teamStats = {
    hours: 1234,
    commits: 5678,
    additions: 123456,
    deletions: 78901,
  };

  const teammates = [
    { name: 'Youssef', hours: 200, isActive: true },
    { name: 'Ismail', hours: 200, isActive: false },
    { name: 'ShadowLight', hours: 200, isActive: true },
    { name: 'Eva', hours: 200, isActive: false },
    { name: 'Keyaan', hours: 200, isActive: true },
    { name: 'Hastnat', hours: 200, isActive: true }
  ];

  const projects = [
    {
      name: 'meow mraow meow meow',
      description: 'meow mraow meow meow meow mraow meow meow meow mraow meow meow',
      pageUrl: '#',
      repoUrl: '#',
    },
       {
      name: 'meow mraow meow meow mraow' ,
      description: 'meow mraow meow meow meow mraow meow meow meow mraow meow meow',
      pageUrl: '#',
      repoUrl: '#',
    },
        {
      name: 'meow mraow meow meow mrp',
      description: 'meow mraow meow meow meow mraow meow meow meow mraow meow meow',
      pageUrl: '#',
      repoUrl: '#',
    },
  ];

  return (
    <div className="text-foreground space-y-8">
      {/* thats here where we see the team stats and the list of teams, and uh, maybe replace the team stats with just our own stats ? idk */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* the stats where we see what the team have done so far */}
        <div className="lg:col-span-2 bg-background/50 p-6 rounded-xl shadow-md flex flex-col border-2 border-neutral h-full overflow-hidden">
          <h2 className="text-2xl font-bold mb-4 text-primary">Team Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow overflow-y-auto">
            <div className="bg-background/50 p-4 rounded-xl shadow-md border-2 border-neutral">
              <p className="text-sm text-neutral">Hours Worked</p>
              <p className="text-3xl font-semibold">{teamStats.hours.toLocaleString()}</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl shadow-md border-2 border-neutral">
              <p className="text-sm text-neutral">Commits</p>
              <p className="text-3xl font-semibold">{teamStats.commits.toLocaleString()}</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl shadow-md border-2 border-neutral">
              <p className="text-sm text-neutral">Additions</p>
              <p className="text-3xl font-semibold text-green-500">{`+${teamStats.additions.toLocaleString()}`}</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl shadow-md border-2 border-neutral">
              <p className="text-sm text-neutral">Deletions</p>
              <p className="text-3xl font-semibold text-red-500">{`-${teamStats.deletions.toLocaleString()}`}</p>
            </div>
          </div>
        </div>

        {/* here there is a list of each member of the team */}
        <div className="lg:col-span-2 bg-background/50 p-6 rounded-xl shadow-md flex flex-col max-h-full overflow-hidden border-2 border-neutral">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Team</h2>
          <div className="flex-grow overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teammates.map((mate) => (
                <div key={mate.name} className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-secondary"></div>
                      <span className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ${mate.isActive ? 'bg-green-500' : 'bg-neutral'} border-2 border-background`}></span>
                    </div>
                    <div>
                      <p className="font-bold">{mate.name}</p>
                      <p className="text-sm text-neutral">{mate.hours} hours</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  in this bottom half we see the projects */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-primary">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-background/50 rounded-xl shadow-md overflow-hidden border-2 border-neutral flex flex-col">
              <div className="h-40 bg-accent"></div> {/* place holder until we get the server running :3*/}
              <div className="p-6 flex-grow"> 
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-neutral mt-2 mb-4">{project.description}</p>
              </div>
              <div className="flex justify-end"> 
                <div className="flex w-1/2">
                  <a href={project.pageUrl} className="flex items-center justify-center gap-2 px-4 py-3 text-foreground hover:bg-neutral/10 transition-colors flex-1 border border-neutral border-r-0 rounded-tl-3xl">
                    <ExternalLinkIcon className="w-4 h-4" />
                    View Page
                  </a>
                  <a href={project.repoUrl} className="flex items-center justify-center gap-2 px-4 py-3 text-foreground hover:bg-neutral/10 transition-colors flex-1 border border-neutral">
                    <CodeIcon className="w-4 h-4" />
                    Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
