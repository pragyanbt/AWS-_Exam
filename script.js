// Exam questions data
const examQuestions = [
    {
        question: "1. Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
        options: [
            "A. Amazon Rekognition",
            "B. AWS Trusted Advisor", 
            "C. Amazon GuardDuty",
            "D. Amazon CloudWatch"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "2. A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
        options: [
            "A. AWS Marketplace",
            "B. AWS Partner Network (APN)",
            "C. AWS Managed Services",
            "D. AWS Service Catalog"
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "3. Which AWS service is a managed NoSQL database?",
        options: [
            "A. Amazon Redshift",
            "B. Amazon DynamoDB",
            "C. Amazon Aurora",
            "D. Amazon RDS for MariaDB"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "4. Which AWS service should be used to create a billing alarm?",
        options: [
            "A. AWS Trusted Advisor",
            "B. AWS CloudTrail",
            "C. Amazon CloudWatch",
            "D. Amazon QuickSight"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "5. A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
        options: [
            "A. Scaling the web application and services developed with Docker",
            "B. Provisioning or scheduling containers to run on clusters and maintain their availability",
            "C. Performing hardware maintenance in the AWS facilities that run the AWS Cloud",
            "D. Managing the guest operating system, including updates and security patches"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "6. Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?",
        options: [
            "A. Amazon CloudFront",
            "B. AWS Direct Connect",
            "C. Amazon EC2 Auto Scaling",
            "D. AWS Transit Gateway"
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "7. Which actions represent best practices for using AWS IAM? (Choose two.)",
        options: [
            "A. Configure a strong password policy",
            "B. Share the security credentials among users of AWS accounts who are in the same Region",
            "C. Use access keys to log in to the AWS Management Console",
            "D. Rotate access keys on a regular basis",
            "E. Avoid using IAM roles to delegate permissions"
        ],
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "8. Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
        options: [
            "A. AWS Config",
            "B. VPC Flow Logs",
            "C. AWS Trusted Advisor",
            "D. AWS CloudTrail"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "9. A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?",
        options: [
            "A. Amazon Inspector",
            "B. Amazon CloudWatch",
            "C. AWS Global Accelerator",
            "D. Amazon CloudFront"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "10. According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)",
        options: [
            "A. Use AWS Config to generate an inventory of AWS resources",
            "B. Use service limits to prevent users from creating or making changes to AWS resources",
            "C. Use AWS CloudTrail to record AWS API calls into an auditable log file",
            "D. Use AWS Certificate Manager to whitelist approved AWS resources and services",
            "E. Use Amazon GuardDuty to validate configuration changes made to AWS resources"
        ],
        correctAnswer: ["A", "C"],
        type: "multiple"
    },
    {
        question: "11. Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
        options: [
            "A. Amazon CloudWatch",
            "B. AWS Config",
            "C. AWS Trusted Advisor",
            "D. AWS IAM"
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "12. Which design principle should be considered when architecting in the AWS Cloud?",
        options: [
            "A. Think of servers as non-disposable resources",
            "B. Use synchronous integration of services",
            "C. Design loosely coupled components",
            "D. Implement the least permissive rules for security groups"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "13. Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
        options: [
            "A. AWS Snowball",
            "B. AWS Lambda",
            "C. AWS ElastiCache",
            "D. AWS Database Migration Service (AWS DMS)",
            "E. Amazon API Gateway"
        ],
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "14. A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
        options: [
            "A. Run the application on a bigger EC2 instance size.",
            "B. Switch to an EC2 instance family that better matches batch requirements.",
            "C. Distribute the application across multiple EC2 instances and run the workload in parallel.",
            "D. Run the application on a bare metal EC2 instance."
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "15. Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
        options: [
            "A. Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.",
            "B. Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.",
            "C. Configure AWS Organizations in each of the existing accounts. Then link all accounts together.",
            "D. Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "16. The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
        options: [
            "A. Economy of scale",
            "B. Elasticity",
            "C. High availability",
            "D. Agility"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "17. An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
        options: [
            "A. AWS CloudTrail",
            "B. Amazon EC2 Auto Scaling",
            "C. Amazon Forecast",
            "D. AWS Config"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "18. Which AWS service enables users to securely connect to AWS resources over the public internet?",
        options: [
            "A. Amazon VPC peering",
            "B. AWS Direct Connect",
            "C. AWS VPN",
            "D. Amazon Pinpoint"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "19. Which tool is used to forecast AWS spending?",
        options: [
            "A. AWS Trusted Advisor",
            "B. AWS Organizations",
            "C. Cost Explorer",
            "D. Amazon Inspector"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "20. A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
        options: [
            "A. Amazon ElastiCache",
            "B. Amazon CloudFront",
            "C. Amazon Elastic File System (Amazon EFS)",
            "D. Amazon Elastic Block Store (Amazon EBS)"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "21. Which of the following is a component of the AWS Global Infrastructure?",
        options: [
            "A. Amazon Alexa",
            "B. AWS Regions",
            "C. Amazon Lightsail",
            "D. AWS Organizations"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "22. Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
        options: [
            "A. Amazon CloudWatch",
            "B. AWS Config",
            "C. AWS CloudTrail",
            "D. Amazon Inspector"
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "23. Why is it beneficial to use Elastic Load Balancers with applications?",
        options: [
            "A. They allow for the conversion from Application Load Balancers to Classic Load Balancers.",
            "B. They are capable of handling constant changes in network traffic patterns.",
            "C. They automatically adjust capacity.",
            "D. They are provided at no charge to users."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "24. Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)",
        options: [
            "A. Infrastructure facilities access management",
            "B. Cloud infrastructure hardware lifecycle management",
            "C. Configuration management of user's applications",
            "D. Networking infrastructure protection",
            "E. Security groups configuration"
        ],
        correctAnswer: ["C", "E"],
        type: "multiple"
    },
    {
        question: "25. IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
        options: [
            "A. Scalability",
            "B. Loose coupling",
            "C. Automation",
            "D. Automatic scaling"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "26. Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
        options: [
            "A. AWS WAF",
            "B. AWS Trusted Advisor",
            "C. AWS Direct Connect",
            "D. AWS Organizations",
            "E. Network ACLs"
        ],
        correctAnswer: ["A", "E"],
        type: "multiple"
    },
    {
        question: "27. An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
        options: [
            "A. Amazon EBS",
            "B. Amazon EFS",
            "C. Amazon S3",
            "D. AWS Artifact"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "28. A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose two.)",
        options: [
            "A. Running a virus scan on EC2 instances",
            "B. Protecting against IP spoofing and packet sniffing",
            "C. Installing the latest security patches on the RDS instance",
            "D. Encrypting communication between the EC2 instances and the Elastic Load Balancer",
            "E. Configuring a security group and a network access control list (NACL) for EC2"
        ],
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
    {
        question: "29. What is the benefit of elasticity in the AWS Cloud?",
        options: [
            "A. Ensure web traffic is automatically spread across multiple AWS Regions.",
            "B. Minimize storage costs by automatically archiving log data.",
            "C. Enable AWS to automatically select the most cost-effective services.",
            "D. Automatically adjust the required compute capacity to maintain consistent performance."
        ],
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "30. The continual reduction of AWS Cloud pricing is due to:",
        options: [
            "A. pay-as-you go pricing",
            "B. the AWS global infrastructure",
            "C. economies of scale",
            "D. reserved storage pricing"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "31. A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
        options: [
            "A. Enable S3 Block Public Access from the AWS Management Console.",
            "B. Hold a team meeting to discuss the importance if only uploading private S3 objects.",
            "C. Require all S3 objects to be manually approved before uploading.",
            "D. Create a service to monitor all S3 uploads and remove any public uploads."
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "32. A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
        options: [
            "A. Open a detailed case related to billing and submit it to AWS Support for help.",
            "B. Upload data describing the issue to a new object in a private Amazon S3 bucket.",
            "C. Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.",
            "D. Proceed with creating a new dashboard in Amazon QuickSight."
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "33. What does the AWS Simple Monthly Calculator do?",
        options: [
            "A. Compares on-premises costs to colocation environments",
            "B. Estimates monthly billing based on projected usage",
            "C. Estimates power consumption at existing data centers",
            "D. Estimates CPU utilization"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "34. Who is responsible for patching the guest operating system for Amazon RDS?",
        options: [
            "A. The AWS Product team",
            "B. The customer Database Administrator",
            "C. Managed partners",
            "D. AWS Support"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "35. Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
        options: [
            "A. Amazon EC2",
            "B. Amazon DynamoDB",
            "C. Amazon S3",
            "D. Amazon Route 53",
            "E. Amazon Redshift"
        ],
        correctAnswer: ["A", "B"],
        type: "multiple"
    },
    {
        question: "36. Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
        options: [
            "A. Reduced cost to run services on AWS",
            "B. Improved availability of applications deployed on AWS",
            "C. Higher durability of data stored on AWS",
            "D. Decreased latency to reach applications deployed on AWS",
            "E. Higher security of data stored on AWS"
        ],
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "37. A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
        options: [
            "A. the AWS Support forum",
            "B. AWS Abuse",
            "C. an AWS Solutions Architect",
            "D. AWS Support"
        ],
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "38. Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
        options: [
            "A. Provision capacity based on past usage and theoretical peaks",
            "B. Dynamically and predictively scale to meet usage demands",
            "C. Build the application and infrastructure in a data center that grants physical access",
            "D. Break apart the application into loosely coupled components"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "39. Which method helps to optimize costs of users moving to the AWS Cloud?",
        options: [
            "A. Paying only for what is used",
            "B. Purchasing hardware before it is needed",
            "C. Manually provisioning cloud resources",
            "D. Purchasing for the maximum possible load"
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "40. Under the AWS shared responsibility model, which of the following is a customer responsibility?",
        options: [
            "A. Installing security patches for the Xen and KVM hypervisors",
            "B. Installing operating system patches for Amazon DynamoDB",
            "C. Installing operating system security patches for Amazon EC2 database instances",
            "D. Installing operating system security patches for Amazon RDS database instances"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "41. The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
        options: [
            "A. Terminate all AWS resources automatically if budget thresholds are exceeded.",
            "B. Break down AWS costs by day, service, and linked AWS account.",
            "C. Create budgets and receive notifications if current of forecasted usage exceeds the budgets.",
            "D. Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.",
            "E. Move data stored in Amazon S3 to a more cost-effective storage class."
        ],
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
    {
        question: "42. Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
        options: [
            "A. AWS Support",
            "B. the customer",
            "C. AWS Systems Manager",
            "D. AWS Config"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "43. Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
        options: [
            "A. AWS Direct Connect",
            "B. Amazon Connect",
            "C. AWS Identity and Access Management (IAM)",
            "D. AWS Firewall Manager"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "44. Which AWS service provides on-demand of AWS security and compliance documentation?",
        options: [
            "A. AWS Directory Service",
            "B. AWS Artifact",
            "C. AWS Trusted Advisor",
            "D. Amazon Inspector"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "45. Which AWS service can be used to turn text into life-like speech?",
        options: [
            "A. Amazon Polly",
            "B. Amazon Transcribe",
            "C. Amazon Rekognition",
            "D. Amazon Lex"
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "46. What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
        options: [
            "A. Design using a serverless architecture",
            "B. Assume that all components within an application can fail",
            "C. Design AWS Auto Scaling into every application",
            "D. Design all components using open-source code"
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "47. A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include: (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.) Where can all this information be found in one location?",
        options: [
            "A. Amazon QuickSight dashboard",
            "B. AWS CloudTrail trails",
            "C. AWS Trusted Advisor report",
            "D. IAM credential report"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "48. Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
        options: [
            "A. Dedicated Hosts",
            "B. On-Demand Instances",
            "C. Spot Instances",
            "D. Reserved Instances"
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "49. Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
        options: [
            "A. AWS Regions",
            "B. Availability Zones",
            "C. Edge locations",
            "D. Data centers"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "50. Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
        options: [
            "A. Security",
            "B. Operational excellence",
            "C. Performance efficiency",
            "D. Cost optimization"
        ],
        correctAnswer: ["A"],
        type: "single"
    }
];

// Global variables
let currentQuestionIndex = 0;
let userAnswers = new Array(examQuestions.length).fill(null);
let examSubmitted = false;
let examTimer = null;
let timeRemaining = 70 * 60; // 70 minutes in seconds
let examStarted = false;

// DOM elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    exam: document.getElementById('exam-screen'),
    results: document.getElementById('results-screen'),
    review: document.getElementById('review-screen')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
});

// Prevent accidental page refresh or navigation during exam
window.addEventListener('beforeunload', function(e) {
    if (examStarted && !examSubmitted) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your exam progress will be lost.';
        return e.returnValue;
    }
});

function initializeEventListeners() {
    // Welcome screen
    document.getElementById('start-exam').addEventListener('click', startExam);
    
    // Exam navigation
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('submit-exam').addEventListener('click', submitExam);
    
    // Results screen
    document.getElementById('review-exam').addEventListener('click', showReview);
    document.getElementById('retake-exam').addEventListener('click', retakeExam);
    
    // Review screen
    document.getElementById('back-to-results').addEventListener('click', showResults);
}

function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the requested screen
    screens[screenName].classList.add('active');
}

function startExam() {
    showScreen('exam');
    displayQuestion(0);
    startTimer();
    examStarted = true;
}

function displayQuestion(index) {
    const question = examQuestions[index];
    const questionContent = document.getElementById('question-content');
    
    // Update progress
    document.getElementById('question-counter').textContent = `Question ${index + 1} of ${examQuestions.length}`;
    document.getElementById('progress-fill').style.width = `${((index + 1) / examQuestions.length) * 100}%`;
    
    // Create question HTML
    let questionHTML = `<div class="question">${question.question}</div>`;
    questionHTML += '<div class="options">';
    
    question.options.forEach((option, optionIndex) => {
        const optionLetter = String.fromCharCode(65 + optionIndex); // A, B, C, D, E
        const isSelected = userAnswers[index] && userAnswers[index].includes(optionLetter);
        const inputType = question.type === 'multiple' ? 'checkbox' : 'radio';
        const inputName = question.type === 'multiple' ? `question-${index}` : `question-${index}`;
        
        questionHTML += `
            <div class="option ${isSelected ? 'selected' : ''}">
                <input type="${inputType}" 
                       id="q${index}-${optionIndex}" 
                       name="${inputName}" 
                       value="${optionLetter}"
                       ${isSelected ? 'checked' : ''}>
                <label for="q${index}-${optionIndex}">${option}</label>
            </div>
        `;
    });
    
    questionHTML += '</div>';
    questionContent.innerHTML = questionHTML;
    
    // Add event listeners to options
    const options = questionContent.querySelectorAll('.option');
    options.forEach((option, optionIndex) => {
        option.addEventListener('click', () => selectOption(index, optionIndex, question.type));
        
        // Also add event listener to the input element itself
        const input = option.querySelector('input');
        if (input) {
            input.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent double triggering
                selectOption(index, optionIndex, question.type);
            });
        }
    });
    
    // Update navigation buttons
    updateNavigationButtons(index);
}

function selectOption(questionIndex, optionIndex, questionType) {
    const optionLetter = String.fromCharCode(65 + optionIndex);
    const inputElement = document.querySelector(`#q${questionIndex}-${optionIndex}`);
    const optionElement = inputElement.parentElement;
    
    if (questionType === 'single') {
        // Clear all options for single choice
        userAnswers[questionIndex] = [optionLetter];
        document.querySelectorAll(`input[name="question-${questionIndex}"]`).forEach(input => {
            input.checked = false;
            input.parentElement.classList.remove('selected');
        });
        // Select the clicked option
        inputElement.checked = true;
        optionElement.classList.add('selected');
    } else {
        // Handle multiple choice
        if (!userAnswers[questionIndex]) {
            userAnswers[questionIndex] = [];
        }
        
        const answerIndex = userAnswers[questionIndex].indexOf(optionLetter);
        if (answerIndex > -1) {
            // Remove from selection
            userAnswers[questionIndex].splice(answerIndex, 1);
            inputElement.checked = false;
            optionElement.classList.remove('selected');
        } else {
            // Add to selection
            userAnswers[questionIndex].push(optionLetter);
            inputElement.checked = true;
            optionElement.classList.add('selected');
        }
    }
}

function updateNavigationButtons(index) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-exam');
    
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.style.display = index === examQuestions.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = index === examQuestions.length - 1 ? 'inline-block' : 'none';
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < examQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function submitExam() {
    examSubmitted = true;
    stopTimer();
    const results = calculateResults();
    displayResults(results);
    showScreen('results');
}

function calculateResults() {
    let correctAnswers = 0;
    let totalPoints = 0;
    const questionResults = [];
    
    examQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const isCorrect = arraysEqual(userAnswer.sort(), question.correctAnswer.sort());
        const points = isCorrect ? 20 : 0;
        
        totalPoints += points;
        if (isCorrect) correctAnswers++;
        
        questionResults.push({
            questionNumber: index + 1,
            question: question.question,
            userAnswer: userAnswer,
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect,
            points: points
        });
    });
    
    const percentage = (totalPoints / 1000) * 100;
    const passed = percentage >= 70;
    
    return {
        totalPoints,
        correctAnswers,
        totalQuestions: examQuestions.length,
        percentage,
        passed,
        questionResults
    };
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function displayResults(results) {
    const resultHeader = document.getElementById('result-header');
    const finalScore = document.getElementById('final-score');
    const percentage = document.getElementById('percentage');
    const scoreDetails = document.getElementById('score-details');
    
    // Calculate time taken
    const timeTaken = 70 * 60 - timeRemaining;
    const minutesTaken = Math.floor(timeTaken / 60);
    const secondsTaken = timeTaken % 60;
    
    // Set result header
    resultHeader.innerHTML = `<div class="${results.passed ? 'pass' : 'fail'}">${results.passed ? 'PASSED!' : 'FAILED'}</div>`;
    
    // Set score
    finalScore.textContent = results.totalPoints;
    percentage.textContent = results.percentage.toFixed(1);
    
    // Set score breakdown
    scoreDetails.innerHTML = `
        <div class="score-item">
            <span>Correct Answers:</span>
            <span>${results.correctAnswers}/${results.totalQuestions}</span>
        </div>
        <div class="score-item">
            <span>Incorrect Answers:</span>
            <span>${results.totalQuestions - results.correctAnswers}/${results.totalQuestions}</span>
        </div>
        <div class="score-item">
            <span>Time Taken:</span>
            <span>${minutesTaken}:${secondsTaken.toString().padStart(2, '0')}</span>
        </div>
        <div class="score-item">
            <span>Passing Score Required:</span>
            <span>700 points (70%)</span>
        </div>
    `;
}

function showReview() {
    const reviewContent = document.getElementById('review-content');
    const results = calculateResults();
    
    let reviewHTML = '';
    results.questionResults.forEach(result => {
        reviewHTML += `
            <div class="review-question">
                <h4>Question ${result.questionNumber}</h4>
                <p>${result.question}</p>
                <div class="review-options">
                    <div class="review-option ${result.isCorrect ? 'correct' : 'incorrect'}">
                        <strong>Your Answer:</strong> ${result.userAnswer.length > 0 ? result.userAnswer.join(', ') : 'No answer'}
                    </div>
                    <div class="review-option correct">
                        <strong>Correct Answer:</strong> ${result.correctAnswer.join(', ')}
                    </div>
                    <div class="review-option">
                        <strong>Points:</strong> ${result.points}/20
                    </div>
                </div>
            </div>
        `;
    });
    
    reviewContent.innerHTML = reviewHTML;
    showScreen('review');
}

function showResults() {
    showScreen('results');
}

function retakeExam() {
    // Reset exam state
    currentQuestionIndex = 0;
    userAnswers = new Array(examQuestions.length).fill(null);
    examSubmitted = false;
    timeRemaining = 70 * 60;
    examStarted = false;
    
    // Clear timer
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }
    
    // Show welcome screen
    showScreen('welcome');
}

function startTimer() {
    updateTimerDisplay();
    examTimer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(examTimer);
            timeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timerElement = document.getElementById('timer');
    
    if (timerElement) {
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Add warning classes based on time remaining
        timerElement.classList.remove('warning', 'danger');
        if (timeRemaining <= 300 && timeRemaining > 60) { // 5 minutes to 1 minute
            timerElement.classList.add('warning');
        } else if (timeRemaining <= 60) { // Last minute
            timerElement.classList.add('danger');
        }
    }
}

function timeUp() {
    if (!examSubmitted) {
        alert('Time is up! Your exam will be submitted automatically.');
        submitExam();
    }
}

function stopTimer() {
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }
}
