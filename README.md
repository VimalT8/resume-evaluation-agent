# Resume Evaluation Agent

## Overview
The Resume Evaluation Agent is a powerful tool designed to assess and provide feedback on resumes using advanced algorithms and evaluation criteria. This documentation covers setup, usage, API endpoints, and feature details.

## Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/VimalT8/resume-evaluation-agent.git
   cd resume-evaluation-agent
   ```

2. **Install Dependencies**
   Use the package manager of your choice to install the required libraries:
   ```bash
   npm install
   ```

3. **Configuration**
   - Create a `.env` file in the root directory based on the `.env.example` template.
   - Update environment variables as required.

4. **Run the Application**
   ```bash
   npm start
   ```

## Usage
- The application runs a server that listens on a specified port.
- You can evaluate resumes by sending requests to the defined API endpoints.

## API Endpoints
### POST /evaluate
- **Description**: Submit a resume for evaluation.
- **Request Body**:
  ```json
  {
      "resume": "Base64 encoded resume content"
  }
  ```
- **Response**:
  ```json
  {
      "score": "85",
      "comments": ["Strong experience in project management", "Consider adding specific metrics"]
  }
  ```

### GET /features
- **Description**: Retrieve a list of features supported by the evaluation agent.
- **Response**:
  ```json
  {
      "features": ["Keyword analysis", "Scoring system", "Feedback comments"]
  }
  ```

## Features
- **Keyword Analysis**: Detects key terms related to job descriptions.
- **Scoring System**: Assigns a score based on predefined criteria and algorithms.
- **Feedback Comments**: Provides actionable insights and suggestions for improvement.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
