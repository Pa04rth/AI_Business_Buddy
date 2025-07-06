import { useEffect, useState } from "react";
import { auth, db } from "../main"; // Import auth and db
import {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Plus,
  FileText,
  Calendar,
  User,
  Clock,
  Info,
  UserPlus,
  X,
  Building,
  DollarSign,
  MapPin,
  Briefcase,
} from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "Marketing",
    budget: "",
    deadline: "",
    company: "",
    location: "",
    requirements: "",
    skillsNeeded: [],
  });
  const [newSkill, setNewSkill] = useState("");
  const currentUser = auth.currentUser;

  useEffect(() => {
    fetchAllProjects();
  }, []);

  const fetchAllProjects = async () => {
    try {
      const projectsRef = collection(db, "Projects");
      const snapshot = await getDocs(projectsRef);
      const projectsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
        deadline: doc.data().deadline?.toDate() || new Date(),
      }));
      setProjects(projectsList);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async () => {
    if (!currentUser) return;
    if (!formData.title || !formData.description || !formData.deadline) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const projectData = {
        ...formData,
        createdBy: currentUser.uid,
        createdByName: currentUser.displayName || currentUser.email,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        deadline: new Date(formData.deadline),
        status: "Open",
        applicants: [],
        budget: formData.budget ? parseFloat(formData.budget) : null,
      };

      await addDoc(collection(db, "projects"), projectData);
      setShowNewProjectForm(false);
      setFormData({
        title: "",
        description: "",
        type: "Marketing",
        budget: "",
        deadline: "",
        company: "",
        location: "",
        requirements: "",
        skillsNeeded: [],
      });
      fetchAllProjects();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleApplyToProject = async (projectId) => {
    if (!currentUser) return;

    try {
      const projectRef = doc(db, "projects", projectId);
      await updateDoc(projectRef, {
        applicants: arrayUnion({
          userId: currentUser.uid,
          userName: currentUser.displayName || currentUser.email,
          appliedAt: new Date(),
        }),
      });
      fetchAllProjects();
    } catch (error) {
      console.error("Error applying to project:", error);
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skillsNeeded.includes(newSkill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skillsNeeded: [...prev.skillsNeeded, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skillsNeeded: prev.skillsNeeded.filter(
        (skill) => skill !== skillToRemove
      ),
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Open":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "Closed":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Marketing":
        return "bg-purple-500/20 text-purple-400";
      case "Product":
        return "bg-orange-500/20 text-orange-400";
      case "Blog":
        return "bg-cyan-500/20 text-cyan-400";
      case "Social Media":
        return "bg-pink-500/20 text-pink-400";
      case "Technical":
        return "bg-indigo-500/20 text-indigo-400";
      case "Design":
        return "bg-rose-500/20 text-rose-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const hasUserApplied = (project) => {
    return project.applicants?.some(
      (applicant) => applicant.userId === currentUser?.uid
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900  to-gray-900">
      <Navigation />

      <main className="flex-1 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  All Projects
                </h1>
                <p className="text-gray-300 text-lg">
                  Discover and apply to exciting content creation projects
                </p>
              </div>
              {currentUser && (
                <button
                  onClick={() => setShowNewProjectForm(true)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Plus size={20} />
                  New Project
                </button>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Total Projects</p>
                    <p className="text-white text-2xl font-bold">
                      {projects.length}
                    </p>
                  </div>
                  <FileText className="text-orange-400" size={24} />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Open Projects</p>
                    <p className="text-white text-2xl font-bold">
                      {projects.filter((p) => p.status === "Open").length}
                    </p>
                  </div>
                  <Briefcase className="text-emerald-400" size={24} />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">In Progress</p>
                    <p className="text-white text-2xl font-bold">
                      {
                        projects.filter((p) => p.status === "In Progress")
                          .length
                      }
                    </p>
                  </div>
                  <Clock className="text-blue-400" size={24} />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Completed</p>
                    <p className="text-white text-2xl font-bold">
                      {projects.filter((p) => p.status === "Completed").length}
                    </p>
                  </div>
                  <Calendar className="text-green-400" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-gray-300 text-lg">Loading projects...</div>
            </div>
          ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          project.type
                        )}`}
                      >
                        {project.type}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white text-xl font-semibold mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {project.company && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Building size={14} />
                        <span>{project.company}</span>
                      </div>
                    )}
                    {project.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <MapPin size={14} />
                        <span>{project.location}</span>
                      </div>
                    )}
                    {project.budget && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <DollarSign size={14} />
                        <span>${project.budget.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar size={14} />
                      <span>Due: {project.deadline?.toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{project.applicants?.length || 0} applicants</span>
                    </div>
                    <span>By {project.createdByName}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowProjectDetails(project)}
                      className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Info size={16} />
                      More Info
                    </button>
                    {currentUser && project.status === "Open" && (
                      <button
                        onClick={() => handleApplyToProject(project.id)}
                        disabled={hasUserApplied(project)}
                        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                          hasUserApplied(project)
                            ? "bg-gray-500/20 text-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 text-orange-400"
                        }`}
                      >
                        <UserPlus size={16} />
                        {hasUserApplied(project) ? "Applied" : "Apply Here"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FileText size={64} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">
                No projects yet
              </h3>
              <p className="text-gray-300 mb-6">
                Be the first to create a project and start collaborating!
              </p>
              {currentUser && (
                <button
                  onClick={() => setShowNewProjectForm(true)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Create First Project
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* New Project Modal */}
      {showNewProjectForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Create New Project
              </h2>
              <button
                onClick={() => setShowNewProjectForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Marketing">Marketing</option>
                    <option value="Product">Product</option>
                    <option value="Blog">Blog</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Technical">Technical</option>
                    <option value="Design">Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget ($)
                  </label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Deadline *
                </label>
                <input
                  type="date"
                  required
                  value={formData.deadline}
                  onChange={(e) =>
                    setFormData({ ...formData, deadline: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Skills Needed
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.skillsNeeded.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-orange-400 hover:text-orange-300"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.requirements}
                  onChange={(e) =>
                    setFormData({ ...formData, requirements: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowNewProjectForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateProject}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                >
                  Create Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {showProjectDetails && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Project Details</h2>
              <button
                onClick={() => setShowProjectDetails(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {showProjectDetails.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      showProjectDetails.type
                    )}`}
                  >
                    {showProjectDetails.type}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      showProjectDetails.status
                    )}`}
                  >
                    {showProjectDetails.status}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {showProjectDetails.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-white">
                    Project Information
                  </h4>
                  {showProjectDetails.company && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Building size={16} />
                      <span>{showProjectDetails.company}</span>
                    </div>
                  )}
                  {showProjectDetails.location && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin size={16} />
                      <span>{showProjectDetails.location}</span>
                    </div>
                  )}
                  {showProjectDetails.budget && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <DollarSign size={16} />
                      <span>${showProjectDetails.budget.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={16} />
                    <span>
                      Deadline:{" "}
                      {showProjectDetails.deadline?.toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <User size={16} />
                    <span>Created by: {showProjectDetails.createdByName}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-white">
                    Skills Needed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {showProjectDetails.skillsNeeded?.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {showProjectDetails.requirements && (
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Requirements
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {showProjectDetails.requirements}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-lg font-medium text-white mb-2">
                  Applicants ({showProjectDetails.applicants?.length || 0})
                </h4>
                <div className="space-y-2">
                  {showProjectDetails.applicants?.map((applicant, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-700 p-3 rounded-lg"
                    >
                      <span className="text-gray-300">
                        {applicant.userName}
                      </span>
                      <span className="text-sm text-gray-400">
                        Applied on {applicant.appliedAt?.toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                  {(!showProjectDetails.applicants ||
                    showProjectDetails.applicants.length === 0) && (
                    <p className="text-gray-400">No applicants yet</p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowProjectDetails(null)}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
                {currentUser && showProjectDetails.status === "Open" && (
                  <button
                    onClick={() => {
                      handleApplyToProject(showProjectDetails.id);
                      setShowProjectDetails(null);
                    }}
                    disabled={hasUserApplied(showProjectDetails)}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      hasUserApplied(showProjectDetails)
                        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                    }`}
                  >
                    <UserPlus size={16} />
                    {hasUserApplied(showProjectDetails)
                      ? "Already Applied"
                      : "Apply to Project"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
