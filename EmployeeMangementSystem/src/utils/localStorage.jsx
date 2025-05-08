const employees = [
    {
      employeeId: "E001",
      Name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Design landing page",
          description: "Create the UI design for the new product landing page.",
          date: "2025-05-08",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Team meeting",
          description: "Attend kickoff meeting with stakeholders.",
          date: "2025-04-20",
          category: "Management"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Prepare project report",
          description: "Summarize April’s progress for the leadership team.",
          date: "2025-04-28",
          category: "Reporting"
        }
      ]
    },
    {
      employeeId: "E002",
      Name: "Bob Smith",
      email: "bob.smith@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Fix login bug",
          description: "Resolve issue preventing some users from logging in.",
          date: "2025-05-08",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Code review",
          description: "Review feature branch before merging to main.",
          date: "2025-04-25",
          category: "Code Review"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Optimize database",
          description: "Improve indexing and query performance.",
          date: "2025-04-26",
          category: "Database"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Update docs",
          description: "Add recent API changes to the internal documentation.",
          date: "2025-04-22",
          category: "Documentation"
        }
      ]
    },
    {
      employeeId: "E003",
      Name: "Charlie Davis",
      email: "charlie.davis@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Test user signup flow",
          description: "Verify the signup process under different conditions.",
          date: "2025-05-08",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Setup CI pipeline",
          description: "Configure GitHub Actions for automated builds.",
          date: "2025-04-19",
          category: "DevOps"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Deploy staging",
          description: "Failed deployment of release v1.2.0 to staging.",
          date: "2025-04-23",
          category: "Deployment"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Refactor dashboard component",
          description: "Break large component into reusable parts.",
          date: "2025-05-06",
          category: "Refactoring"
        }
      ]
    },
    {
      employeeId: "E004",
      Name: "Diana Ross",
      email: "diana.ross@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Conduct user interviews",
          description: "Talk to users to gather feedback for UI improvements.",
          date: "2025-05-08",
          category: "UX Research"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Build navigation bar",
          description: "Implement top-level navigation for the app.",
          date: "2025-04-15",
          category: "Frontend"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Create accessibility report",
          description: "Evaluate the platform’s accessibility issues.",
          date: "2025-04-18",
          category: "Accessibility"
        }
      ]
    },
    {
      employeeId: "E005",
      Name: "Ethan Lee",
      email: "ethan.lee@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Set up unit testing",
          description: "Configure Jest and write initial test cases.",
          date: "2025-05-08",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Create modal component",
          description: "Reusable modal for all pop-up needs.",
          date: "2025-04-17",
          category: "Frontend"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Sprint retrospective",
          description: "Attend retrospective and share feedback.",
          date: "2025-04-30",
          category: "Scrum"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Write API integration",
          description: "Integrate new analytics endpoint.",
          date: "2025-05-06",
          category: "Backend"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title: "Security audit checklist",
          description: "Prepare pre-deployment security audit.",
          date: "2025-05-08",
          category: "Security"
        }
      ]
    }
  ];
  
  const admin = [
    {
      employeeId: "A001",
      Name: "Admin User",
      email: "admin@gmail.com",
      password: "123"
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
  
    return { employees, admin };
  };
  