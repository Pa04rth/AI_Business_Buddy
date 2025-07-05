import { useEffect, useState } from 'react';
import { auth, db } from '../main'; // Import auth and db
import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'; // Import Firestore functions
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Plus, FileText, Calendar, User, Clock, MoreVertical } from 'lucide-react';

const Projects = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchUserDataAndProjects = async () => {
      if (currentUser) {
        try {
          // Fetch user type from Firestore
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            setUserType(userDocSnap.data().type);
          }

          // Fetch user's projects (this would be your actual projects collection)
          // For now, we'll use mock data
          const mockProjects = [
            {
              id: '1',
              title: 'Marketing Campaign Q1',
              description: 'Content creation for spring marketing campaign including blog posts, social media content, and email newsletters.',
              type: 'Marketing',
              status: 'In Progress',
              createdAt: new Date('2024-01-15'),
              updatedAt: new Date('2024-01-20'),
              wordCount: 2500,
              collaborators: ['John Doe', 'Jane Smith']
            },
            {
              id: '2',
              title: 'Product Launch Content',
              description: 'Comprehensive content strategy for new product launch including press releases, feature descriptions, and user guides.',
              type: 'Product',
              status: 'Completed',
              createdAt: new Date('2024-01-10'),
              updatedAt: new Date('2024-01-18'),
              wordCount: 4200,
              collaborators: ['Alice Johnson']
            },
            {
              id: '3',
              title: 'SEO Blog Series',
              description: 'Monthly blog post series focused on industry trends and SEO optimization.',
              type: 'Blog',
              status: 'Draft',
              createdAt: new Date('2024-01-22'),
              updatedAt: new Date('2024-01-22'),
              wordCount: 1800,
              collaborators: ['Bob Wilson', 'Carol Davis']
            },
            {
              id: '4',
              title: 'Social Media Templates',
              description: 'Reusable social media content templates for various platforms and campaigns.',
              type: 'Social Media',
              status: 'In Progress',
              createdAt: new Date('2024-01-12'),
              updatedAt: new Date('2024-01-19'),
              wordCount: 950,
              collaborators: ['Emma Brown']
            }
          ];

          setProjects(mockProjects);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserDataAndProjects();
  }, [currentUser]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Draft':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Marketing':
        return 'bg-purple-500/20 text-purple-400';
      case 'Product':
        return 'bg-orange-500/20 text-orange-400';
      case 'Blog':
        return 'bg-cyan-500/20 text-cyan-400';
      case 'Social Media':
        return 'bg-pink-500/20 text-pink-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {currentUser ? (
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      Your Projects
                    </h1>
                    <p className="text-writeforge-gray text-lg">
                      Manage and track your AI-generated content projects
                    </p>
                  </div>
                  <button className="bg-writeforge-orange hover:bg-writeforge-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                    <Plus size={20} />
                    New Project
                  </button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <div className="glass-effect rounded-xl border border-writeforge-dark-border p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-writeforge-gray text-sm">Total Projects</p>
                        <p className="text-white text-2xl font-bold">{projects.length}</p>
                      </div>
                      <FileText className="text-writeforge-orange" size={24} />
                    </div>
                  </div>
                  <div className="glass-effect rounded-xl border border-writeforge-dark-border p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-writeforge-gray text-sm">In Progress</p>
                        <p className="text-white text-2xl font-bold">
                          {projects.filter(p => p.status === 'In Progress').length}
                        </p>
                      </div>
                      <Clock className="text-blue-400" size={24} />
                    </div>
                  </div>
                  <div className="glass-effect rounded-xl border border-writeforge-dark-border p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-writeforge-gray text-sm">Completed</p>
                        <p className="text-white text-2xl font-bold">
                          {projects.filter(p => p.status === 'Completed').length}
                        </p>
                      </div>
                      <Calendar className="text-green-400" size={24} />
                    </div>
                  </div>
                  <div className="glass-effect rounded-xl border border-writeforge-dark-border p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-writeforge-gray text-sm">Total Words</p>
                        <p className="text-white text-2xl font-bold">
                          {projects.reduce((sum, p) => sum + p.wordCount, 0).toLocaleString()}
                        </p>
                      </div>
                      <FileText className="text-writeforge-orange" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-writeforge-gray text-lg">Loading projects...</div>
                </div>
              ) : projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <div 
                      key={project.id} 
                      className="glass-effect rounded-xl border border-writeforge-dark-border p-6 hover:border-writeforge-orange/50 transition-colors cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                            {project.type}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        <button className="text-writeforge-gray hover:text-white transition-colors">
                          <MoreVertical size={20} />
                        </button>
                      </div>
                      
                      <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-writeforge-gray text-sm mb-4 line-clamp-3">{project.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-writeforge-gray mb-4">
                        <span>{project.wordCount.toLocaleString()} words</span>
                        <span>{project.updatedAt.toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-writeforge-gray" />
                        <span className="text-writeforge-gray text-sm">
                          {project.collaborators.length} collaborator{project.collaborators.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <FileText size={64} className="text-writeforge-gray mx-auto mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-2">No projects yet</h3>
                  <p className="text-writeforge-gray mb-6">
                    Create your first AI-powered content project to get started
                  </p>
                  <button className="bg-writeforge-orange hover:bg-writeforge-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Create Project
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <FileText size={64} className="text-writeforge-gray mx-auto mb-4" />
                <h2 className="text-white text-2xl font-semibold mb-2">Access Your Projects</h2>
                <p className="text-writeforge-gray text-lg mb-6">
                  Please log in to view and manage your content projects
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;