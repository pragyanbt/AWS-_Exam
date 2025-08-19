// Exam questions data - Practice Exam 1
const examQuestions1 = [
    {
        question: "1. Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
        options: [
            "A. Availability Zone",
            "B. Edge location",
            "C. Region",
            "D. Private networking"
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "2. One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
        options: [
            "A. The ability to bid for a lower hourly cost.",
            "B. Paying a daily rate regardless of time used.",
            "C. Paying only for time used.",
            "D. Pre-paying for instances and paying a lower hourly rate."
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "3. What can assist in evaluating an application for migration to the cloud? (Select TWO)",
        options: [
            "A. AWS Trusted Advisor.",
            "B. AWS Professional Services.",
            "C. AWS Systems Manager.",
            "D. AWS Partner Network (APN).",
            "E. AWS Secrets Manager."
        ],
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "4. A characteristic of edge locations is that they:",
        options: [
            "A. Host Amazon EC2 instances closer to users.",
            "B. Help lower latency and improve performance for users.",
            "C. Cache frequently changing data without reaching the origin server.",
            "D. Refresh data changes daily."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "5. Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
        options: [
            "A. Command line interface.",
            "B. On-premises.",
            "C. Software Development Kits.",
            "D. Software-as-a-service.",
            "E. Hybrid."
        ],
        correctAnswer: ["A", "C"],
        type: "multiple"
    },
    {
        question: "6. What is a value proposition of the AWS Cloud?",
        options: [
            "A. AWS is responsible for security in the AWS Cloud.",
            "B. No long-term contract is required.",
            "C. Provision new servers in days.",
            "D. AWS manages user applications in the AWS Cloud."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "7. A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
        options: [
            "A. Amazon EC2 Spot Instances.",
            "B. Amazon EC2 Dedicated Instances.",
            "C. Amazon EC2 On-Demand Instances.",
            "D. Amazon EC2 Reserved Instances."
        ],
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "8. Which AWS service is used to track record, and audit configuration changes made to AWS resources?",
        options: [
            "A. AWS Shield.",
            "B. AWS Config.",
            "C. AWS IAM.",
            "D. Amazon Inspector."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "9. Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
        options: [
            "A. Fault tolerance.",
            "B. Global reach.",
            "C. Pay-as-you-go pricing.",
            "D. High availability."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "10. How can one AWS account use Reserved Instances from another AWS account?",
        options: [
            "A. By using Amazon EC2 Dedicated Instances.",
            "B. By using AWS Organizations consolidated billing.",
            "C. By using the AWS Cost Explorer tool.",
            "D. By using AWS Budgets."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "11. What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
        options: [
            "A. AWS automatically distributes the data globally for higher durability.",
            "B. AWS will take care of operating the application.",
            "C. AWS makes it easy to architect for high availability.",
            "D. AWS can easily accommodate application demand changes.",
            "E. AWS takes care of application security patching."
        ],
        correctAnswer: ["C", "D"],
        type: "multiple"
    },
    {
        question: "12. Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
        options: [
            "A. Amazon RDS.",
            "B. Amazon EC2.",
            "C. Amazon ElastiCache.",
            "D. AWS Fargate."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "13. AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
        options: [
            "A. Implementing Amazon Rekognition.",
            "B. Using AWS Shield-protected resources.",
            "C. Blocking access with Security Groups.",
            "D. Using Multi-Factor Authentication (MFA).",
            "E. Enforcing password strength and expiration."
        ],
        correctAnswer: ["D", "E"],
        type: "multiple"
    },
    {
        question: "14. Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
        options: [
            "A. Amazon Glacier",
            "B. AWS Snowball",
            "C. AWS Storage Gateway",
            "D. Amazon Elastic Block Storage (Amazon EBS)"
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "15. Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
        options: [
            "A. AWS Marketplace.",
            "B. Amazon Lumberyard.",
            "C. AWS Artifact.",
            "D. Amazon CloudSearch."
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "16. Which of the following is a component of the AWS Global Infrastructure?",
        options: [
            "A. Amazon Alexa.",
            "B. AWS Regions.",
            "C. Amazon Lightsail.",
            "D. AWS Organizations."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "17. Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
        options: [
            "A. On-Demand Instances.",
            "B. Reserved Instances.",
            "C. Spot Instances.",
            "D. Convertible Reserved Instances."
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "18. A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
        options: [
            "A. Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated",
            "B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC",
            "C. Use Amazon Athena to query data from the on-premises database servers",
            "D. Connect the company's on-premises data center to AWS using AWS Direct Connect",
            "E. Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers"
        ],
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "19. A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
        options: [
            "A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
            "B. Run AWS Trusted Advisor and review the findings.",
            "C. Open the AWS IAM console and check the inbound rule filters for open access.",
            "D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "20. Which of the following security-related services does AWS offer? (Select TWO)",
        options: [
            "A. Multi-factor authentication physical tokens.",
            "B. AWS Trusted Advisor security checks.",
            "C. Data encryption.",
            "D. Automated penetration testing.",
            "E. Amazon S3 copyrighted content detection."
        ],
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
    {
        question: "21. Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
        options: [
            "A. AWS WAF.",
            "B. Amazon DynamoDB.",
            "C. Amazon EC2.",
            "D. Amazon CloudFront.",
            "E. Amazon Inspector."
        ],
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "22. Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
        options: [
            "A. Amazon Elastic Block Store (Amazon EBS).",
            "B. Amazon Machine Image.",
            "C. Amazon EC2 Systems Manager.",
            "D. Amazon AppStream 2.0."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "23. A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
        options: [
            "A. Think parallel.",
            "B. Implement elasticity.",
            "C. Decouple your components.",
            "D. Design for failure."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "24. Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
        options: [
            "A. Easy and fast deployment of applications in multiple Regions around the world.",
            "B. Security of the AWS Cloud.",
            "C. Elasticity of the AWS Cloud.",
            "D. Lower variable costs due to massive economies of scale."
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "25. What can users access from AWS Artifact?",
        options: [
            "A. AWS security and compliance documents.",
            "B. A download of configuration management details for all AWS resources.",
            "C. Training materials for AWS services.",
            "D. A security assessment of the applications deployed in the AWS Cloud."
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "26. Compared with costs in traditional and virtualized data centers, AWS has:",
        options: [
            "A. Greater variable costs and greater upfront costs.",
            "B. Fixed usage costs and lower upfront costs.",
            "C. Lower variable costs and greater upfront costs.",
            "D. Lower variable costs and lower upfront costs."
        ],
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "27. Which AWS service would a customer use with a static website to achieve tower latency and high transfer speeds?",
        options: [
            "A. AWS Lambda.",
            "B. Amazon DynamoDB Accelerator.",
            "C. Amazon Route 53.",
            "D. Amazon CloudFront."
        ],
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "28. How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
        options: [
            "A. They automatically add more instances across multiple AWS Regions based on global demand of the application.",
            "B. They automatically add or replace instances across multiple Availability Zones when the application needs it.",
            "C. They enable the application's stalk: content to reside closer to end users.",
            "D. They are able to distribute incoming requests across a tier of web server instances."
        ],
        correctAnswer: ["B"],
        type: "single"
    },
    {
        question: "29. Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        options: [
            "A. A public and private key-pair.",
            "B. Amazon Inspector.",
            "C. AWS Identity and Access Management (IAM) policies.",
            "D. Security Groups."
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "30. How should a customer forecast the future costs for running a new web application?",
        options: [
            "A. Amazon Aurora Backtrack.",
            "B. Amazon CloudWatch Billing Alarms.",
            "C. AWS Simple Monthly Calculator.",
            "D. AWS Cost and Usage report."
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "31. Where are AWS compliance documents, such as an SOC 1 report, located?",
        options: [
            "A. Amazon Inspector.",
            "B. AWS CloudTrail.",
            "C. AWS Artifact.",
            "D. AWS Certificate Manager."
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "32. Which of the following tasks is the responsibility of AWS?",
        options: [
            "A. Encrypting client-side data.",
            "B. Configuring AWS Identity and Access Management (IAM) roles.",
            "C. Securing the Amazon EC2 hypervisor.",
            "D. Setting user password policies."
        ],
        correctAnswer: ["C"],
        type: "single"
    },
    {
        question: "33. Under the shared responsibility model which of the following areas are the customer's responsibility? (Select TWO)",
        options: [
            "A. Firmware upgrades of network infrastructure.",
            "B. Patching of operating systems.",
            "C. Patching of the underlying hypervisor.",
            "D. Physical security of data centers.",
            "E. Configuration of the security group."
        ],
        correctAnswer: ["B", "E"],
        type: "multiple"
    },
    {
        question: "34. A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?",
        options: [
            "A. Amazon Simple Storage Service (Amazon S3).",
            "B. Amazon DynamoDB.",
            "C. Amazon Kinesis.",
            "D. Amazon Redshift."
        ],
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "35. Much AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
        options: [
            "A. Amazon EBS.",
            "B. AWS Direct Connect.",
            "C. Amazon CloudFront.",
            "D. AWS Storage Gateway.",
            "E. Amazon Connect."
        ],
        correctAnswer: ["B", "D"],
        type: "multiple"
    },
    {
        question: "36. What are the advantages of the AWS Cloud (Select TWO)",
        options: [
            "A. Fixed rate monthly cost.",
            "B. No need to guess capacity requirements.",
            "C. Increased speed to market.",
            "D. Increased upfront capital expenditure.",
            "E. Physical access to cloud data centers."
        ],
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
    {
        question: "37. How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
        options: [
            "A. Users do not have to wait for infrastructure provisioning.",
            "B. The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
            "C. AWS takes over application configuration management on behalf of users.",
            "D. Users do not need to address security and compliance issues."
        ],
        correctAnswer: ["A"],
        type: "single"
    },
    {
        question: "38. Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
        options: [
            "A. AWS Elastic Beanstalk.",
            "B. AWS OpsWorks.",
            "C. AWS CodeDeploy.",
            "D. AWS Batch.",
            "E. AWS X-Ray."
        ],
        correctAnswer: ["B", "C"],
        type: "multiple"
    },
    {
        question: "39. What is an example of agility in the AWS Cloud?",
        options: [
            "A. Access to multiple instance types.",
            "B. Access to managed services.",
            "C. Using Consolidated Billing to produce one bill.",
            "D. Decreased acquisition time for new compute resources."
        ],
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "40. Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
        options: [
            "A. Amazon Inspector.",
            "B. AWS Web Application Firewall (AWS WAF).",
            "C. Elastic Load Balancing (ELB).",
            "D. AWS Shield."
        ],
        correctAnswer: ["D"],
        type: "single"
    },
    {
        question: "41. Which of the following are advantages of AWS consolidated billing? (Choose two)",
        options: [
            "A. The ability to receive one bill for multiple accounts.",
            "B. Service limits increasing by default in all accounts.",
            "C. A fixed discount on the monthly bill.",
            "D. Potential volume discounts, as usage in all accounts is combined.",
            "E. The automatic extension of the master account's AWS support plan to all accounts."
        ],
        correctAnswer: ["A", "D"],
        type: "multiple"
    },
    {
        question: "42. A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
        options: [
            "A. Amazon Redshift.",
            "B. Amazon DynamoDB.",
            "C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.",
            "D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)."
        ],
        correctAnswer: ["D"],
        type: "single"
    },
    // Additional 8 questions from Practice Exam 20 to make it 50 questions
    {
        question: "43. Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
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
        question: "44. Which AWS service is a managed NoSQL database?",
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
        question: "45. Which AWS service should be used to create a billing alarm?",
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
        question: "46. Which actions represent best practices for using AWS IAM? (Choose two.)",
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
        question: "47. Which AWS service enables users to securely connect to AWS resources over the public internet?",
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
        question: "48. Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
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
        question: "49. Which AWS service provides on-demand of AWS security and compliance documentation?",
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

// Exam questions data - Practice Exam 2 (Original)
const examQuestions2 = [
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

// Exam questions data - Practice Exam 3
const examQuestions3 = [
  {
    question: `1. What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?`,
    options: [
      `A. Cost Explorer`,
      `B. AWS Total Cost of Ownership (TCO) Calculator`,
      `C. AWS Simple Monthly Calculator`,
      `D. AWS Trusted Advisor`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `2. Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?`,
    options: [
      `A. AWS Cost Explorer between AWS accounts`,
      `B. Linked accounts and consolidated billing`,
      `C. Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report`,
      `D. Amazon EC2 Instance Usage Report between AWS accounts`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `3. A company has multiple AWS accounts and wants to simplify and consolidate its billing process. <br/>Which AWS service will achieve this?`,
    options: [
      `A. AWS Cost and Usage Reports`,
      `B. AWS Organizations`,
      `C. AWS Cost Explorer`,
      `D. AWS Budgets`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `4. A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. <br/> Which of the following services will help fulfill this requirement?`,
    options: [
      `A. Amazon CloudFront`,
      `B. AWS Direct Connect`,
      `C. Amazon Route 53 global DNS`,
      `D. Amazon Simple Storage Service (Amazon S3) transfer acceleration`,
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `5. Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?`,
    options: [
      `A. On-premises`,
      `B. Hybrid`,
      `C. Cloud`,
      `D. Platform as a service`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `6. How is asset management on AWS easier than asset management in a physical data center?`,
    options: [
      `A. AWS provides a Configuration Management Database that users can maintain.`,
      `B. AWS performs infrastructure discovery scans on the customer's behalf.`,
      `C. Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket.`,
      `D. Users can gather asset metadata reliably with a few API calls.`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `7. What feature of Amazon RDS helps to create globally redundant databases?`,
    options: [
      `A. Snapshots`,
      `B. Automatic patching and updating`,
      `C. Cross-Region read replicas`,
      `D. Provisioned IOPS`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `8. Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:`,
    options: [
      `A. restricted access.`,
      `B. as-needed access.`,
      `C. least privilege access.`,
      `D. token access.`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `9. Which methods can be used to identify AWS costs by departments? (Choose two.)`,
    options: [
      `A. Enable multi-factor authentication for the AWS account root user.`,
      `B. Create separate accounts for each department.`,
      `C. Use Reserved Instances whenever possible.`,
      `D. Use tags to associate each instance with a particular department.`,
      `E. Pay bills using purchase orders.`,
    ],
    correctAnswer: [`B`,`D`],
    type: `multiple`
  },
  {
    question: `10. Under the AWS shared responsibility model, customer responsibilities include which one of the following?`,
    options: [
      `A. Securing the hardware, software, facilities, and networks that run all products and services.`,
      `B. Providing certificates, reports, and other documentation directly to AWS customers under NDA.`,
      `C. Configuring the operating system, network, and firewall.`,
      `D. Obtaining industry certifications and independent third-party attestations.`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `11. Which managed AWS service provides real-time guidance on AWS security best practices?`,
    options: [
      `A. AWS X-Ray`,
      `B. AWS Trusted Advisor`,
      `C. Amazon CloudWatch`,
      `D. AWS Systems Manager`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `12. Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?`,
    options: [
      `A. Resource groups`,
      `B. Lifecycle policies`,
      `C. Application Load Balancer`,
      `D. Amazon EC2 Auto Scaling`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `13. Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)`,
    options: [
      `A. Visualization management`,
      `B. Hardware management`,
      `C. Encryption management`,
      `D. Facilities management`,
      `E. Firewall management`,
    ],
    correctAnswer: [`C`,`E`],
    type: `multiple`
  },
  {
    question: `14. Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?`,
    options: [
      `A. AWS Direct Connect`,
      `B. AWS Snowball`,
      `C. AWS Storage Gateway`,
      `D. AWS Snowball Edge`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `15. What is a responsibility of AWS in the shared responsibility model?`,
    options: [
      `A. Updating the network ACLs to block traffic to vulnerable ports.`,
      `B. Patching operating systems running on Amazon EC2 instances.`,
      `C. Updating the firmware on the underlying EC2 hosts.`,
      `D. Updating the security group rules to block traffic to the vulnerable ports.`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `16. Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?`,
    options: [
      `A. Implement loose coupling.`,
      `B. Design for failure.`,
      `C. Automate everything that can be automated.`,
      `D. Use services, not servers.`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `17. What does it mean to grant least privilege to AWS IAM users?`,
    options: [
      `A. It is granting permissions to a single user only.`,
      `B. It is granting permissions using AWS IAM policies only.`,
      `C. It is granting AdministratorAccess policy permissions to trustworthy users.`,
      `D. It is granting only the permissions required to perform a given task.`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `18. What is a benefit of loose coupling as a principle of cloud architecture design?`,
    options: [
      `A. It facilitates low-latency request handling.`,
      `B. It allows applications to have dependent workflows.`,
      `C. It prevents cascading failures between different components.`,
      `D. It allows companies to focus on their physical data center operations.`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `19. A director has been tasked with investigating hybrid cloud architecture. The company currently accesses AWS over the public internet.<br/>Which service will facilitate private hybrid connectivity?`,
    options: [
      `A. Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway`,
      `B. AWS Direct Connect`,
      `C. Amazon Simple Storage Service (Amazon S3) Transfer Acceleration`,
      `D. AWS Web Application Firewall (AWS WAF)`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `20. A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. <br> Applying which AWS Cloud design principle will address the current design issue?`,
    options: [
      `A. Implementing elasticity, enabling the application to scale up or scale down as demand changes.`,
      `B. Enabling several EC2 instances to run in parallel to achieve better performance.`,
      `C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.`,
      `D. Doubling EC2 computing resources to increase system fault tolerance.`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `21. How can a customer increase security to AWS account logons? (Choose two.)`,
    options: [
      `A. Configure AWS Certificate Manager`,
      `B. Enable Multi-Factor Authentication (MFA)`,
      `C. Use Amazon Cognito to manage access`,
      `D. Configure a strong password policy`,
      `E. Enable AWS Organizations`,
    ],
    correctAnswer: [`B`,`D`],
    type: `multiple`
  },
  {
    question: `22. What AWS service would be used to centrally manage AWS access across multiple accounts?`,
    options: [
      `A. AWS Service Catalog`,
      `B. AWS Config`,
      `C. AWS Trusted Advisor`,
      `D. AWS Organizations`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `23. Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?`,
    options: [
      `A. AWS Cost and Usage reports`,
      `B. AWS Budgets`,
      `C. AWS Cost Explorer`,
      `D. AWS Trusted Advisor`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `24. What can users access from AWS Artifact?`,
    options: [
      `A. AWS security and compliance documents`,
      `B. A download of configuration management details for all AWS resources`,
      `C. Training materials for AWS services`,
      `D. A security assessment of the applications deployed in the AWS Cloud`,
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `25. Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?`,
    options: [
      `A. Enterprise`,
      `B. Business`,
      `C. Developer`,
      `D. Basic`,
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `26. Which of the following is an AWS Well-Architected Framework design principle related to reliability?`,
    options: [
      `A. Deployment to a single Availability Zone`,
      `B. Ability to recover from failure`,
      `C. Design for cost optimization`,
      `D. Perform operations as code`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `27. Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?`,
    options: [
      `A. Amazon EBS`,
      `B. Amazon EC2 instance store`,
      `C. Amazon EFS`,
      `D. Amazon S3`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `28. What is an advantage of using the AWS Cloud over a traditional on-premises solution?`,
    options: [
      `A. Users do not have to guess about future capacity needs.`,
      `B. Users can utilize existing hardware contracts for purchases.`,
      `C. Users can fix costs no matter what their traffic is.`,
      `D. Users can avoid audits by using reports from AWS.`,
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `29. Which of the following is an AWS-managed compute service?`,
    options: [
      `A. Amazon SWF`,
      `B. Amazon EC2`,
      `C. AWS Lambda`,
      `D. Amazon Aurora`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `30. Which of the following is an important architectural principle when designing cloud applications?`,
    options: [
      `A. Store data and backups in the same region.`,
      `B. Design tightly coupled system components.`,
      `C. Avoid multi-threading.`,
      `D. Design for failure`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `31. Which mechanism allows developers to access AWS services from application code?`,
    options: [
      `A. AWS Software Development Kit`,
      `B. AWS Management Console`,
      `C. AWS CodePipeline`,
      `D. AWS Config`,
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `32. Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?`,
    options: [
      `A. On-Demand Instances`,
      `B. Reserved Instances`,
      `C. Spot Instances`,
      `D. Dedicated Instances`,
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `33. Which of the following services is a MySQL-compatible database that automatically grows storage as needed?`,
    options: [
      `A. Amazon Elastic Compute Cloud (Amazon EC2)`,
      `B. Amazon Relational Database Service (Amazon RDS) for MySQL`,
      `C. Amazon Lightsail`,
      `D. Amazon Aurora`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `34. Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?`,
    options: [
      `A. Amazon VPC endpoints`,
      `B. Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink`,
      `C. Amazon VPC peering`,
      `D. AWS Direct Connect`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `35. Which service's PRIMARY purpose is software version control?`,
    options: [
      `A. Amazon CodeStar`,
      `B. AWS Command Line Interface (AWS CLI)`,
      `C. Amazon Cognito`,
      `D. AWS CodeCommit`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `36. A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform. <br/>Which tool can be used to perform this comparison?`,
    options: [
      `A. AWS Simple Monthly Calculator`,
      `B. AWS Total Cost of Ownership (TCO) Calculator`,
      `C. AWS Billing and Cost Management console`,
      `D. Cost Explorer`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `37. Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?`,
    options: [
      `A. AWS Batch`,
      `B. AWS Snowball`,
      `C. AWS Migration Hub`,
      `D. AWS Snowmobile`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `38. Which of the following BEST describe the AWS pricing model? (Choose two.)`,
    options: [
      `A. Fixed-term`,
      `B. Pay-as-you-go`,
      `C. Colocation`,
      `D. Planned`,
      `E. Variable cost`,
    ],
    correctAnswer: [`B`,`E`],
    type: `multiple`
  },
  {
    question: `39. Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)`,
    options: [
      `A. Public load balancers with AWS Application Auto Scaling capabilities`,
      `B. F5 Big-IP and Citrix NetScaler load balancers`,
      `C. Classic Load Balancers`,
      `D. Cross-zone load balancers with public and private IPs`,
      `E. Application Load Balancers`,
    ],
    correctAnswer: [`C`,`E`],
    type: `multiple`
  },
  {
    question: `40. Why should a company choose AWS instead of a traditional data center?`,
    options: [
      `A. AWS provides users with full control over the underlying resources.`,
      `B. AWS does not require long-term contracts and provides a pay-as-you-go model.`,
      `C. AWS offers edge locations in every country, supporting global reach.`,
      `D. AWS has no limits on the number of resources that can be created.`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `41. Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?`,
    options: [
      `A. AWS CloudTrail across multiple Availability Zones`,
      `B. Amazon CloudFront to edge locations`,
      `C. AWS CloudFormation in multiple regions`,
      `D. A virtual private gateway over AWS Direct Connect`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `42. Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?`,
    options: [
      `A. AWS Config`,
      `B. AWS Certificate Manager`,
      `C. Amazon Inspector`,
      `D. AWS Artifact`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `43. Which of the following AWS services can be used to run a self-managed database?`,
    options: [
      `A. Amazon Route 53`,
      `B. AWS X-Ray`,
      `C. AWS Snowmobile`,
      `D. Amazon Elastic Compute Cloud (Amazon EC2)`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `44. What exclusive benefit is provided to users with Enterprise Support?`,
    options: [
      `A. Access to a Technical Project Manager`,
      `B. Access to a Technical Account Manager`,
      `C. Access to a Cloud Support Engineer`,
      `D. Access to a Solutions Architect`,
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `45. How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?`,
    options: [
      `A. Deploy applications across multiple Availability Zones within an AWS Region.`,
      `B. Use a hybrid cloud computing deployment model within the geographic area.`,
      `C. Deploy applications across multiple AWS Regions.`,
      `D. Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.`,
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `46. How does AWS MOST effectively reduce computing costs for a growing start-up company?`,
    options: [
      `A. It provides on-demand resources for peak usage.`,
      `B. It automates the provisioning of individual developer environments.`,
      `C. It automates customer relationship management.`,
      `D. It implements a fixed monthly computing budget.`,
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `47. A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future. <br/> Which of the following is a characteristic of the AWS Cloud that would meet this specific need?`,
    options: [
      `A. Elasticity`,
      `B. Reliability`,
      `C. Performance`,
      `D. Agility`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `48. Which AWS Support plan provides a full set of AWS Trusted Advisor checks?`,
    options: [
      `A. Business and Developer Support`,
      `B. Business and Basic Support`,
      `C. Enterprise and Developer Support`,
      `D. Enterprise and Business Support`,
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `49. Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose two.)`,
    options: [
      `A. AWS WAF`,
      `B. Amazon DynamoDB`,
      `C. Amazon EC2`,
      `D. Amazon CloudFront`,
      `E. Amazon Inspector`,
    ],
    correctAnswer: [`A`,`D`],
    type: `multiple`
  },
  {
    question: `50. When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)`,
    options: [
      `A. Compute costs`,
      `B. Facilities costs`,
      `C. Storage costs`,
      `D. Data transfer costs`,
      `E. Network infrastructure costs`,
      `F. Hardware lifecycle costs`,
    ],
    correctAnswer: [`A`,`C`,`D`],
    type: `multiple`
  },
];

// Exam questions data - Practice Exam 4
// NOTE: Currently only 2 questions provided. Need to add 48 more questions to complete the 50-question exam.
const examQuestions4 = [
  {
    question: `1. A company operating in the AWS Cloud requires separate invoices for specific environments, such as development, testing, and production. How can this be achieved?`,
    options: [
      `A. Use multiple AWS accounts`,
      `B. Use resource tagging`,
      `C. Use multiple VPCs`,
      `D. Use Cost Explorer`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `3. What can be used to reduce the cost of running Amazon EC2 instances? (Choose two.)`,
    options: [
      `A. Spot Instances for stateless and flexible workloads`,
      `B. Memory optimized instances for high-compute workloads`,
      `C. On-Demand Instances for high-cost and sustained workloads`,
      `D. Reserved Instances for sustained workloads`,
      `E. Spend limits set using AWS Budgets`
    ],
    correctAnswer: [`A`,`D`],
    type: `multiple`
  },
  // TODO: Add remaining 48 questions to complete the 50-question exam
];

// Exam questions data - Practice Exam 5
const examQuestions5 = [
  {
    question: `1. Which storage service can be used as a low-cost option for hosting static websites?`,
    options: [
      `A. Amazon Glacier`,
      `B. Amazon DynamoDB`,
      `C. Amazon Elastic File System (Amazon EFS)`,
      `D. Amazon Simple Storage Service (Amazon S3)`
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `2. Which Amazon EC2 instance pricing model can provide discounts of up to 90%?`,
    options: [
      `A. Reserved Instances`,
      `B. On-Demand`,
      `C. Dedicated Hosts`,
      `D. Spot Instances`
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `3. A company is running several business-critical workloads. Which of the following AWS features or services will help ensure that the workloads remain available even if a data center fails? (Choose two.)`,
    options: [
      `A. Availability Zones`,
      `B. Consolidated billing`,
      `C. Elastic Load Balancing`,
      `D. IAM access keys`,
      `E. Resource groups`
    ],
    correctAnswer: [`A`, `C`],
    type: `multiple`
  },
  {
    question: `4. Which AWS service enables infrastructure as code?`,
    options: [
      `A. Amazon CloudWatch`,
      `B. AWS Config`,
      `C. AWS CloudFormation`,
      `D. AWS Trusted Advisor`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `5. Which AWS service is used to set up private dedicated connections to AWS?`,
    options: [
      `A. AWS VPN`,
      `B. Amazon VPC`,
      `C. AWS Direct Connect`,
      `D. AWS Transit Gateway`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `6. Which of the following is an advantage of cloud computing?`,
    options: [
      `A. Requires large upfront investment`,
      `B. Provides unlimited storage capacity`,
      `C. Provides elasticity and scalability`,
      `D. Requires on-premises hardware`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `7. Which service should a company use to distribute incoming application traffic across multiple Amazon EC2 instances?`,
    options: [
      `A. Amazon CloudFront`,
      `B. Amazon Route 53`,
      `C. Elastic Load Balancing`,
      `D. AWS Global Accelerator`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `8. Which AWS service lets you run code without provisioning or managing servers?`,
    options: [
      `A. Amazon EC2`,
      `B. AWS Lambda`,
      `C. AWS Elastic Beanstalk`,
      `D. Amazon Lightsail`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `9. Which of the following is a benefit of using AWS Trusted Advisor?`,
    options: [
      `A. Provides automated cost optimization and performance recommendations`,
      `B. Automates infrastructure provisioning`,
      `C. Monitors network traffic`,
      `D. Encrypts data at rest`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `10. Which AWS support plan includes a response time of <15 minutes for business-critical system failures?`,
    options: [
      `A. Basic`,
      `B. Developer`,
      `C. Business`,
      `D. Enterprise`
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `11. Which of the following is an example of horizontal scaling?`,
    options: [
      `A. Migrating workloads from Amazon EC2 to AWS Lambda`,
      `B. Adding more CPU and RAM to an existing EC2 instance`,
      `C. Adding more EC2 instances to handle increased traffic`,
      `D. Using Amazon S3 for storing backups`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `12. Which AWS service enables you to establish a logically isolated section of the AWS Cloud?`,
    options: [
      `A. Amazon VPC`,
      `B. AWS Direct Connect`,
      `C. Amazon CloudFront`,
      `D. Elastic Load Balancing`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `13. Which of the following describes the AWS Shared Responsibility Model?`,
    options: [
      `A. AWS is responsible for security in the cloud, while customers are responsible for security of the cloud.`,
      `B. Customers are responsible for both security in the cloud and security of the cloud.`,
      `C. AWS is responsible for both security in the cloud and security of the cloud.`,
      `D. Customers are responsible only for network security, while AWS handles everything else.`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `14. Which AWS service can help detect malicious activity in AWS accounts by analyzing CloudTrail logs?`,
    options: [
      `A. AWS Inspector`,
      `B. Amazon GuardDuty`,
      `C. AWS Shield`,
      `D. AWS WAF`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `15. Which of the following is a characteristic of Amazon S3?`,
    options: [
      `A. Unlimited object storage`,
      `B. Block storage for EC2`,
      `C. Relational database storage`,
      `D. Queued message storage`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `16. A company wants to track user activity and API usage across AWS accounts. Which AWS service should they use?`,
    options: [
      `A. AWS Config`,
      `B. Amazon CloudWatch`,
      `C. AWS CloudTrail`,
      `D. AWS Trusted Advisor`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `17. Which pricing model offers the lowest cost for workloads that can tolerate interruptions?`,
    options: [
      `A. On-Demand Instances`,
      `B. Reserved Instances`,
      `C. Spot Instances`,
      `D. Dedicated Hosts`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `18. Which AWS service allows you to scale a fleet of Amazon EC2 instances automatically?`,
    options: [
      `A. AWS Elastic Beanstalk`,
      `B. Amazon CloudFront`,
      `C. Amazon EC2 Auto Scaling`,
      `D. AWS Lambda`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `19. Which AWS service allows organizations to manage multiple AWS accounts centrally?`,
    options: [
      `A. AWS Organizations`,
      `B. AWS Control Tower`,
      `C. AWS Config`,
      `D. IAM`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `20. Which AWS service is a managed relational database service?`,
    options: [
      `A. Amazon DynamoDB`,
      `B. Amazon RDS`,
      `C. Amazon ElastiCache`,
      `D. Amazon Neptune`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `21. Which AWS service enables you to analyze and visualize log data?`,
    options: [
      `A. Amazon CloudWatch Logs Insights`,
      `B. AWS Trusted Advisor`,
      `C. AWS Systems Manager`,
      `D. AWS Config`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `22. Which AWS service helps protect against DDoS attacks?`,
    options: [
      `A. AWS WAF`,
      `B. AWS Shield`,
      `C. Amazon GuardDuty`,
      `D. AWS Config`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `23. Which service provides a secure way to manage AWS access keys and permissions?`,
    options: [
      `A. AWS Secrets Manager`,
      `B. AWS Systems Manager`,
      `C. AWS Identity and Access Management (IAM)`,
      `D. Amazon Cognito`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `24. Which AWS service helps customers visualize, understand, and manage AWS spending?`,
    options: [
      `A. AWS Cost Explorer`,
      `B. AWS Budgets`,
      `C. AWS Trusted Advisor`,
      `D. Consolidated Billing`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `25. Which AWS service provides content delivery with low latency?`,
    options: [
      `A. Amazon CloudFront`,
      `B. AWS Direct Connect`,
      `C. Elastic Load Balancing`,
      `D. Amazon S3`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `26. Which AWS service can be used to run containers without provisioning or managing servers?`,
    options: [
      `A. Amazon EKS`,
      `B. Amazon ECS with AWS Fargate`,
      `C. AWS Lambda`,
      `D. AWS Elastic Beanstalk`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `27. Which AWS service helps automate the deployment of applications?`,
    options: [
      `A. AWS Elastic Beanstalk`,
      `B. AWS CodePipeline`,
      `C. AWS CodeDeploy`,
      `D. All of the above`
    ],
    correctAnswer: [`D`],
    type: `single`
  },
  {
    question: `28. Which of the following is a serverless NoSQL database?`,
    options: [
      `A. Amazon Aurora`,
      `B. Amazon DynamoDB`,
      `C. Amazon Neptune`,
      `D. Amazon RDS`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `29. Which AWS service allows you to monitor CPU, memory, and network usage of Amazon EC2 instances?`,
    options: [
      `A. AWS Config`,
      `B. Amazon CloudWatch`,
      `C. AWS Trusted Advisor`,
      `D. AWS Systems Manager`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `30. Which AWS service is used for object lifecycle policies such as transitioning data to Glacier?`,
    options: [
      `A. AWS Backup`,
      `B. AWS DataSync`,
      `C. Amazon S3`,
      `D. AWS Glue`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `31. Which AWS service provides DNS services?`,
    options: [
      `A. Amazon CloudFront`,
      `B. Elastic Load Balancing`,
      `C. Amazon Route 53`,
      `D. AWS Transit Gateway`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `32. Which AWS service allows customers to launch and manage virtual servers in the cloud?`,
    options: [
      `A. Amazon EC2`,
      `B. AWS Lambda`,
      `C. AWS Fargate`,
      `D. AWS Elastic Beanstalk`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `33. Which AWS service is used to centrally store, encrypt, and audit secrets?`,
    options: [
      `A. AWS IAM`,
      `B. AWS Secrets Manager`,
      `C. AWS KMS`,
      `D. AWS Systems Manager`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `34. Which AWS service is used to analyze and process big data using open-source frameworks such as Hadoop?`,
    options: [
      `A. Amazon Redshift`,
      `B. Amazon Athena`,
      `C. Amazon EMR`,
      `D. AWS Glue`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `35. Which AWS service enables automatic distribution of incoming traffic across multiple targets?`,
    options: [
      `A. AWS Direct Connect`,
      `B. Elastic Load Balancing`,
      `C. AWS Global Accelerator`,
      `D. Amazon CloudFront`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `36. Which AWS service lets you query data stored in S3 using standard SQL?`,
    options: [
      `A. Amazon Redshift`,
      `B. Amazon RDS`,
      `C. Amazon Athena`,
      `D. AWS Glue`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `37. Which of the following AWS services is a fully managed data warehouse?`,
    options: [
      `A. Amazon Redshift`,
      `B. Amazon Aurora`,
      `C. Amazon DynamoDB`,
      `D. Amazon RDS`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `38. Which AWS service helps detect vulnerabilities in applications running on AWS?`,
    options: [
      `A. AWS Config`,
      `B. AWS Inspector`,
      `C. AWS Trusted Advisor`,
      `D. Amazon GuardDuty`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `39. Which AWS service enables private Git-based source code repositories?`,
    options: [
      `A. AWS CodePipeline`,
      `B. AWS CodeCommit`,
      `C. AWS CodeBuild`,
      `D. AWS CodeDeploy`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `40. Which AWS service helps ensure compliance by recording AWS resource configurations over time?`,
    options: [
      `A. AWS Config`,
      `B. AWS Trusted Advisor`,
      `C. Amazon CloudWatch`,
      `D. AWS Systems Manager`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `41. Which AWS service is used to migrate databases to AWS securely and quickly?`,
    options: [
      `A. AWS Glue`,
      `B. AWS Database Migration Service (DMS)`,
      `C. Amazon RDS`,
      `D. Amazon Redshift`
    ],
    correctAnswer: [`B`],
    type: `single`
  },
  {
    question: `42. Which AWS service provides real-time access control to AWS resources based on policies?`,
    options: [
      `A. AWS IAM`,
      `B. AWS KMS`,
      `C. AWS CloudTrail`,
      `D. AWS WAF`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `43. Which AWS service allows businesses to run virtual desktops in the AWS Cloud?`,
    options: [
      `A. Amazon WorkSpaces`,
      `B. Amazon AppStream 2.0`,
      `C. AWS Lambda`,
      `D. Amazon EC2`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `44. Which AWS service provides machine learning models that require no ML expertise?`,
    options: [
      `A. Amazon SageMaker`,
      `B. Amazon Rekognition`,
      `C. Amazon Polly`,
      `D. Amazon Comprehend`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `45. Which AWS service is designed to provide a secure and durable service for storing backups and archives at a low cost?`,
    options: [
      `A. Amazon S3`,
      `B. Amazon EBS`,
      `C. Amazon Glacier (S3 Glacier)`,
      `D. Amazon DynamoDB`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `46. Which AWS service helps with compliance reporting by providing audit-ready reports?`,
    options: [
      `A. AWS Artifact`,
      `B. AWS Inspector`,
      `C. AWS Trusted Advisor`,
      `D. AWS Config`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `47. Which AWS service helps reduce latency by caching data at edge locations?`,
    options: [
      `A. Amazon CloudFront`,
      `B. AWS Direct Connect`,
      `C. Elastic Load Balancing`,
      `D. Amazon S3`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `48. Which AWS service can be used to build and deploy APIs?`,
    options: [
      `A. Amazon API Gateway`,
      `B. Amazon AppFlow`,
      `C. AWS CodePipeline`,
      `D. AWS Step Functions`
    ],
    correctAnswer: [`A`],
    type: `single`
  },
  {
    question: `49. Which AWS service is used for long-term object storage with retrieval times ranging from minutes to hours?`,
    options: [
      `A. Amazon S3`,
      `B. Amazon EBS`,
      `C. Amazon S3 Glacier`,
      `D. Amazon DynamoDB`
    ],
    correctAnswer: [`C`],
    type: `single`
  },
  {
    question: `50. Which AWS service allows you to create isolated cloud environments for application development and testing?`,
    options: [
      `A. AWS Control Tower`,
      `B. AWS Organizations`,
      `C. AWS CloudFormation`,
      `D. AWS Elastic Beanstalk`
    ],
    correctAnswer: [`A`],
    type: `single`
  }
];

// Global variables
let currentQuestionIndex = 0;
let userAnswers = []; // Will be initialized when exam starts
let examSubmitted = false;
let examTimer = null;
let timeRemaining = 70 * 60; // 70 minutes in seconds
let examStarted = false;
let currentExam = 'exam1'; // Default exam
let examResults = []; // Store all exam results

// DOM elements
const screens = {
    dashboard: document.getElementById('dashboard-screen'),
    welcome: document.getElementById('welcome-screen'),
    exam: document.getElementById('exam-screen'),
    results: document.getElementById('results-screen'),
    review: document.getElementById('review-screen')
};

// Debug screens object
console.log('Screens object initialized:');
Object.keys(screens).forEach(key => {
    console.log(key + ':', screens[key] ? 'Found' : 'NOT FOUND');
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    console.log('Initializing event listeners...');
    initializeEventListeners();
    console.log('Event listeners initialized');
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
    console.log('Setting up event listeners...');
    
    // Dashboard
    const startExamBtns = document.querySelectorAll('.start-exam-btn');
    console.log('Found', startExamBtns.length, 'start exam buttons');
    
    startExamBtns.forEach((btn, index) => {
        console.log('Setting up button', index, 'with exam type:', btn.dataset.exam);
        btn.addEventListener('click', (e) => {
            console.log('Dashboard start exam button clicked');
            const examType = e.target.dataset.exam;
            console.log('Selected exam type:', examType);
            selectExam(examType);
        });
    });
    
    // Welcome screen
    const startExamBtn = document.getElementById('start-exam');
    const backToDashboardBtn = document.getElementById('back-to-dashboard');
    
    console.log('Welcome screen start exam button found:', !!startExamBtn);
    console.log('Back to dashboard button found:', !!backToDashboardBtn);
    
    if (startExamBtn) {
        startExamBtn.addEventListener('click', () => {
            console.log('Welcome screen start exam button clicked');
            startExam();
        });
    } else {
        console.error('Start exam button not found!');
    }
    
    if (backToDashboardBtn) {
        backToDashboardBtn.addEventListener('click', showDashboard);
    }
    
    // Exam navigation
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitExamBtn = document.getElementById('submit-exam');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', previousQuestion);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }
    
    if (submitExamBtn) {
        submitExamBtn.addEventListener('click', submitExam);
    }
    
    // Results screen
    const reviewExamBtn = document.getElementById('review-exam');
    const retakeExamBtn = document.getElementById('retake-exam');
    const backToDashboardFromResultsBtn = document.getElementById('back-to-dashboard-from-results');
    
    if (reviewExamBtn) {
        reviewExamBtn.addEventListener('click', showReview);
    }
    
    if (retakeExamBtn) {
        retakeExamBtn.addEventListener('click', retakeExam);
    }
    
    if (backToDashboardFromResultsBtn) {
        backToDashboardFromResultsBtn.addEventListener('click', showDashboard);
    }
    
    // Review screen
    const backToResultsBtn = document.getElementById('back-to-results');
    if (backToResultsBtn) {
        backToResultsBtn.addEventListener('click', showResults);
    }
    
    // Load saved data and update dashboard
    loadExamData();
    updateDashboard();
}

function showScreen(screenName) {
    console.log('showScreen called with screenName:', screenName);
    console.log('Available screens:', Object.keys(screens));
    
    // Hide all screens
    Object.values(screens).forEach(screen => {
        if (screen) {
            screen.classList.remove('active');
        }
    });
    
    // Show the requested screen
    const targetScreen = screens[screenName];
    if (targetScreen) {
        targetScreen.classList.add('active');
        console.log('Screen', screenName, 'is now active');
    } else {
        console.error('Screen', screenName, 'not found!');
    }
}

function startExam() {
    console.log('startExam function called');
    console.log('Current exam:', currentExam);
    
    // Initialize userAnswers array for current exam
    const examQuestions = getCurrentExamQuestions();
    console.log('Exam questions length:', examQuestions.length);
    userAnswers = new Array(examQuestions.length).fill(null);
    
    // Update exam header title
    let examTitle = 'AWS Practice Exam 1';
    if (currentExam === 'exam2') examTitle = 'AWS Practice Exam 2';
    if (currentExam === 'exam3') examTitle = 'AWS Practice Exam 3';
    if (currentExam === 'exam4') examTitle = 'AWS Practice Exam 4';
    if (currentExam === 'exam5') examTitle = 'AWS Practice Exam 5';
    const examHeaderTitle = document.getElementById('exam-header-title');
    if (examHeaderTitle) {
        examHeaderTitle.textContent = examTitle;
    }
    
    showScreen('exam');
    displayQuestion(0);
    startTimer();
    examStarted = true;
    
    console.log('Exam started successfully');
}

function displayQuestion(index) {
    console.log('displayQuestion called with index:', index);
    const examQuestions = getCurrentExamQuestions();
    const question = examQuestions[index];
    const questionContent = document.getElementById('question-content');
    
    if (!question) {
        console.error('Question not found for index:', index);
        return;
    }
    
    if (!questionContent) {
        console.error('Question content element not found');
        return;
    }
    
    // Update progress
    const questionCounter = document.getElementById('question-counter');
    const progressFill = document.getElementById('progress-fill');
    
    if (questionCounter) {
        questionCounter.textContent = `Question ${index + 1} of ${examQuestions.length}`;
    }
    
    if (progressFill) {
        progressFill.style.width = `${((index + 1) / examQuestions.length) * 100}%`;
    }
    
    // Create question HTML
    let questionHTML = `<div class="question">${question.question}</div>`;
    
    // Add selection counter for multiple choice questions
    if (question.type === 'multiple') {
        const currentSelections = userAnswers[index] ? userAnswers[index].length : 0;
        questionHTML += `<div class="selection-counter">Selected: ${currentSelections}/2</div>`;
    }
    
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
        // Handle multiple choice (limit to 2 selections)
        if (!userAnswers[questionIndex]) {
            userAnswers[questionIndex] = [];
        }
        
        const answerIndex = userAnswers[questionIndex].indexOf(optionLetter);
        if (answerIndex > -1) {
            // Remove from selection
            userAnswers[questionIndex].splice(answerIndex, 1);
            inputElement.checked = false;
            optionElement.classList.remove('selected');
            updateSelectionCounter(questionIndex);
        } else {
            // Check if we can add more selections (limit to 2)
            if (userAnswers[questionIndex].length < 2) {
                // Add to selection
                userAnswers[questionIndex].push(optionLetter);
                inputElement.checked = true;
                optionElement.classList.add('selected');
                updateSelectionCounter(questionIndex);
            } else {
                // Show warning that only 2 options can be selected
                showSelectionLimitWarning();
            }
        }
    }
}

function updateNavigationButtons(index) {
    const examQuestions = getCurrentExamQuestions();
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
    const examQuestions = getCurrentExamQuestions();
    if (currentQuestionIndex < examQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function submitExam() {
    examSubmitted = true;
    stopTimer();
    const results = calculateResults();
    
    // Save exam result
    const examResult = {
        examType: currentExam,
        totalPoints: results.totalPoints,
        correctAnswers: results.correctAnswers,
        totalQuestions: results.totalQuestions,
        percentage: results.percentage,
        passed: results.passed,
        timeTaken: Math.floor((70 * 60 - timeRemaining) / 60), // Convert to minutes
        timestamp: new Date().toISOString()
    };
    
    examResults.push(examResult);
    saveExamData();
    
    displayResults(results);
    showScreen('results');
}

function calculateResults() {
    const examQuestions = getCurrentExamQuestions();
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
    const examQuestions = getCurrentExamQuestions();
    
    let reviewHTML = '';
    results.questionResults.forEach(result => {
        const questionIndex = result.questionNumber - 1;
        const question = examQuestions[questionIndex];
        
        // Get user's selected option texts
        let userAnswerTexts = [];
        if (result.userAnswer.length > 0) {
            result.userAnswer.forEach(answerLetter => {
                const optionIndex = answerLetter.charCodeAt(0) - 65; // Convert A=0, B=1, etc.
                if (optionIndex >= 0 && optionIndex < question.options.length) {
                    userAnswerTexts.push(question.options[optionIndex]);
                }
            });
        }
        
        // Get correct answer option texts
        let correctAnswerTexts = [];
        result.correctAnswer.forEach(answerLetter => {
            const optionIndex = answerLetter.charCodeAt(0) - 65; // Convert A=0, B=1, etc.
            if (optionIndex >= 0 && optionIndex < question.options.length) {
                correctAnswerTexts.push(question.options[optionIndex]);
            }
        });
        
        reviewHTML += `
            <div class="review-question">
                <h4>Question ${result.questionNumber}</h4>
                <p>${result.question}</p>
                <div class="review-options">
                    <div class="review-option ${result.isCorrect ? 'correct' : 'incorrect'}">
                        <strong>Your Answer:</strong> ${userAnswerTexts.length > 0 ? userAnswerTexts.join('<br>') : 'No answer selected'}
                    </div>
                    <div class="review-option correct">
                        <strong>Correct Answer:</strong> ${correctAnswerTexts.join('<br>')}
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
    const examQuestions = getCurrentExamQuestions();
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

function showDashboard() {
    updateDashboard();
    showScreen('dashboard');
}

function selectExam(examType) {
    console.log('selectExam called with examType:', examType);
    currentExam = examType;
    let examTitle = 'AWS Practice Exam 1';
    if (examType === 'exam2') examTitle = 'AWS Practice Exam 2';
    if (examType === 'exam3') examTitle = 'AWS Practice Exam 3';
    if (examType === 'exam4') examTitle = 'AWS Practice Exam 4';
    if (examType === 'exam5') examTitle = 'AWS Practice Exam 5';
    console.log('Setting exam title to:', examTitle);
    
    const examTitleElement = document.getElementById('exam-title');
    if (examTitleElement) {
        examTitleElement.textContent = examTitle;
    } else {
        console.error('Exam title element not found');
    }
    
    // Reset exam state for new exam
    currentQuestionIndex = 0;
    const examQuestions = getCurrentExamQuestions();
    userAnswers = new Array(examQuestions.length).fill(null);
    examSubmitted = false;
    timeRemaining = 70 * 60;
    examStarted = false;
    
    console.log('Showing welcome screen');
    showScreen('welcome');
}

function getCurrentExamQuestions() {
    if (currentExam === 'exam1') return examQuestions1;
    if (currentExam === 'exam2') return examQuestions2;
    if (currentExam === 'exam3') return examQuestions3;
    if (currentExam === 'exam4') return examQuestions4;
    if (currentExam === 'exam5') return examQuestions5;
    return examQuestions1; // Default fallback
}

function loadExamData() {
    const savedData = localStorage.getItem('awsExamResults');
    if (savedData) {
        examResults = JSON.parse(savedData);
    }
}

function saveExamData() {
    localStorage.setItem('awsExamResults', JSON.stringify(examResults));
}

function updateDashboard() {
    // Update statistics
    const totalExams = examResults.length;
    const passedExams = examResults.filter(result => result.passed).length;
    const highestScore = examResults.length > 0 ? Math.max(...examResults.map(r => r.percentage)) : 0;
    const avgTime = examResults.length > 0 ? 
        Math.round(examResults.reduce((sum, r) => sum + r.timeTaken, 0) / examResults.length) : 0;
    
    document.getElementById('total-exams').textContent = totalExams;
    document.getElementById('exams-passed').textContent = passedExams;
    document.getElementById('highest-score').textContent = `${highestScore.toFixed(1)}%`;
    document.getElementById('avg-time').textContent = `${avgTime} min`;
    
    // Update exam-specific best scores
    const exam1Results = examResults.filter(r => r.examType === 'exam1');
    const exam2Results = examResults.filter(r => r.examType === 'exam2');
    const exam3Results = examResults.filter(r => r.examType === 'exam3');
    const exam4Results = examResults.filter(r => r.examType === 'exam4');
    const exam5Results = examResults.filter(r => r.examType === 'exam5');
    
    const exam1Best = exam1Results.length > 0 ? Math.max(...exam1Results.map(r => r.percentage)) : 0;
    const exam2Best = exam2Results.length > 0 ? Math.max(...exam2Results.map(r => r.percentage)) : 0;
    const exam3Best = exam3Results.length > 0 ? Math.max(...exam3Results.map(r => r.percentage)) : 0;
    const exam4Best = exam4Results.length > 0 ? Math.max(...exam4Results.map(r => r.percentage)) : 0;
    const exam5Best = exam5Results.length > 0 ? Math.max(...exam5Results.map(r => r.percentage)) : 0;
    
    document.getElementById('exam1-best').textContent = exam1Best > 0 ? `${exam1Best.toFixed(1)}%` : 'Not taken';
    document.getElementById('exam2-best').textContent = exam2Best > 0 ? `${exam2Best.toFixed(1)}%` : 'Not taken';
    document.getElementById('exam3-best').textContent = exam3Best > 0 ? `${exam3Best.toFixed(1)}%` : 'Not taken';
    document.getElementById('exam4-best').textContent = exam4Best > 0 ? `${exam4Best.toFixed(1)}%` : 'Not taken';
    document.getElementById('exam5-best').textContent = exam5Best > 0 ? `${exam5Best.toFixed(1)}%` : 'Not taken';
    
    // Update recent results
    updateRecentResults();
}

function updateRecentResults() {
    const recentResultsList = document.getElementById('recent-results-list');
    
    if (examResults.length === 0) {
        recentResultsList.innerHTML = '<p class="no-results">No exams taken yet. Start your first exam!</p>';
        return;
    }
    
    const recentResults = examResults.slice(-5).reverse(); // Show last 5 results
    let html = '';
    
    recentResults.forEach(result => {
        let examName = 'Practice Exam 1';
        if (result.examType === 'exam2') examName = 'Practice Exam 2';
        if (result.examType === 'exam3') examName = 'Practice Exam 3';
        if (result.examType === 'exam4') examName = 'Practice Exam 4';
        if (result.examType === 'exam5') examName = 'Practice Exam 5';
        const resultClass = result.passed ? 'passed' : 'failed';
        const scoreClass = result.passed ? 'passed' : 'failed';
        
        html += `
            <div class="result-item ${resultClass}">
                <div class="result-info">
                    <h4>${examName}</h4>
                    <p>${new Date(result.timestamp).toLocaleDateString()} - ${result.timeTaken} minutes</p>
                </div>
                <div class="result-score ${scoreClass}">
                    ${result.percentage.toFixed(1)}%
                </div>
            </div>
        `;
    });
    
    recentResultsList.innerHTML = html;
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

function showSelectionLimitWarning() {
    // Create a temporary warning message
    const warningDiv = document.createElement('div');
    warningDiv.className = 'selection-warning';
    warningDiv.textContent = 'You can only select 2 options for this question.';
    warningDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #dc3545;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(warningDiv);
    
    // Remove warning after 3 seconds
    setTimeout(() => {
        if (warningDiv.parentNode) {
            warningDiv.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (warningDiv.parentNode) {
                    warningDiv.parentNode.removeChild(warningDiv);
                }
            }, 300);
        }
    }, 3000);
}

function updateSelectionCounter(questionIndex) {
    const examQuestions = getCurrentExamQuestions();
    const counterElement = document.querySelector('.selection-counter');
    if (counterElement && examQuestions[questionIndex].type === 'multiple') {
        const currentSelections = userAnswers[questionIndex] ? userAnswers[questionIndex].length : 0;
        counterElement.textContent = `Selected: ${currentSelections}/2`;
    }
}
