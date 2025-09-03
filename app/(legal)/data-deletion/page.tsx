// app/(legal)/data-deletion/page.tsx

const DataDeletionPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md prose prose-lg">
          <h1>Data Deletion Instructions</h1>
          <p>
            At Talent Nest, you have full control over your data. You can
            request the deletion of your data in the following ways.
          </p>

          <h2>1. Deleting Specific Information</h2>
          <p>
            You can delete specific parts of your profile data directly within
            the application:
          </p>
          <ul>
            <li>Log in to your Talent Nest account.</li>
            <li>
              Navigate to your <strong>Profile</strong> page.
            </li>
            <li>
              In the sections for Career History, Education, or Resumes, you
              will find delete buttons next to each entry.
            </li>
            <li>
              Clicking the delete button will permanently remove that specific
              piece of information from your profile.
            </li>
          </ul>

          <h2>2. Requesting Full Account Deletion</h2>
          <p>
            To permanently delete your entire account and all associated data
            (including your profile, resumes, and application history), please
            follow these steps:
          </p>
          <ol>
            <li>
              Send an email to{" "}
              <a href="mailto:camoylamot06@gmail.com">camoylamot06@gmail.com</a>
              .
            </li>
            <li>
              Use the subject line:{" "}
              <strong>&quot;Data Deletion Request&quot;</strong>.
            </li>
            <li>
              In the body of the email, please include the email address
              associated with your Talent Nest account to help us identify you.
            </li>
          </ol>
          <p>
            For security purposes, we may need to send a confirmation email to
            your registered address to verify your request. Once confirmed, we
            will process your request and permanently delete all your personal
            data from our systems within 30 days. You will be notified via email
            upon completion.
          </p>

          <p>
            If you have any questions, please feel free to contact us at the
            email address above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPage;
