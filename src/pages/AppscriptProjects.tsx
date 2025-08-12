import React from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/image-util.js';

const AppscriptProjects = () => {
  // List 2 Projects per Element
  // Each project has a title, description, image, technologies, and demo URL
  const projects = [
    {
      title: "Simpro Sorter",
      description: "Simpro Sorter is a Google Apps Script web app that automates importing and updating employee productivity reports into a master spreadsheet. It detects duplicates, logs all changes for auditing, sorts and formats data, and ensures safe updates with concurrency control. The script integrates seamlessly with other systems via GET/POST requests and processes reports directly from Google Drive.",
      technologies: ["Appscript", "Simpro", "Google Sheets"],
      demoUrl: "https://github.com/aldreeeny/simpro-sorter#",


      title2: "Xero Data Studio Community Connector",
      description2: "A Google Data Studio connector for Xero Accounting that uses OAuth2 to securely pull data such as bank transactions, invoices, items, transfers, and P&L reports. Supports multiple endpoints, date filtering, and pagination, enabling seamless visualization of Xero financial data in Data Studio.",
      technologies2: ["Appscript", "Xero", "Google Data Studio (Looker Studio)"],
      demoUrl2: "https://github.com/aldreeeny/xero-data-studio-community-connector",
      featured: true,
    },
    {
      title: "Wisenet Data Studio Community Connector",
      description: "A Google Data Studio connector for Wisenet that uses an API key to pull data from multiple endpoints (e.g., Agents, Assessors, CourseEnrollments). Supports dynamic schemas, large dataset pagination, and easy deployment, enabling seamless visualization of Wisenet data in Data Studio.",
      technologies: ["Appscript", "Wisenet", "Google Data Studio (Looker Studio)"],
      demoUrl: "https://github.com/aldreeeny/wisenet-datastudio-connector",

      title2: "Wisenet to Google Sheets",
      description2: "A Google Apps Script automation for pulling Wisenet course and unit enrolment data into Google Sheets. It fetches data via API (with pagination), maintains masterlists, calculates retention/completion stats, grades, and EFTSL, and updates linked graphs and summaries—streamlining reporting and analysis directly in Sheets.",
      technologies2: ["Appscript", "Wisenet", "Google Data Studio (Looker Studio)", "Google Sheets"],
      demoUrl2: "https://github.com/aldreeeny/wisenet-to-google-sheets",
      featured: true,
    },
    {
      title: "BambooHR Time Off Request Sync",
      description: "A Google Apps Script automation that connects BambooHR to Google Sheets to automatically retrieve, process, and organize employee time-off requests. It supports basic and enhanced versions, calculates working days, handles errors, creates sheets as needed, and provides a custom menu for easy syncing. Designed for HR reporting, leave balance tracking, and notifications, it securely uses the BambooHR API with configurable date ranges and formatting options.",
      technologies: ["Appscript", "BambooHR", "Google Sheets"],
      demoUrl: "https://github.com/aldreeeny/bamboohr-timeoff-sync",

      title2: "Asset & License Expiry Tracking Automation",
      description2: "A Google Apps Script system that monitors expiry dates for vehicles, properties, and licenses, sending automated webhook notifications at 6 weeks, 1 month, and 2 weeks before renewal. It pulls structured data from Google Sheets, organizes asset details in Google Drive, and integrates with services like Zapier for alerts. Fully customizable for asset types, notification schedules, and webhook endpoints, it ensures proactive compliance and renewal management.",
      technologies2: ["Appscript", "Google Sheet"],
      demoUrl2: "https://github.com/aldreeeny/wisenet-to-google-sheets",
      featured: true,
    },
    {
      title: "Crelate CRM API Integration",
      description: "A Google Apps Script solution that connects to the Crelate CRM API for automated contact, tag, and note management. It retrieves and updates contacts by tags, adds time-stamped notes, and handles tag assignments or removals. Built with robust error handling and easy setup, it streamlines CRM updates directly from Google Apps Script while maintaining secure API key usage.",
      technologies: ["Appscript", "Crelate", "Google Sheets"],
      demoUrl: "https://github.com/aldreeeny/crelate-crm-integration",

      title2: "People Data Labs (PDL) API Integration",
      description2: "A Google Apps Script solution that connects to the People Data Labs API to enrich single or bulk person records with professional, contact, and social profile information. It supports up to 100 records per bulk request, includes robust error handling, and is easy to configure with a PDL API key. Designed for lead enrichment, contact database enhancement, and sales prospecting, it securely integrates enriched data into Google Sheets or other workflows.",
      technologies2: ["Appscript", "People Data Labs"],
      demoUrl2: "https://github.com/aldreeeny/pdl-api-integration",
      featured: true,
    },
    {
      title: "Asana Task Data Extractor",
      description: "A Google Apps Script tool that connects to the Asana API to extract detailed task data from all projects within a workspace, including assignees, due dates, completion status, custom fields (e.g., “SITE”), and team information. The system supports large datasets with pagination, structures the data, and exports it directly to Google Sheets for reporting and analysis. It’s ideal for tracking project progress, managing workloads, and consolidating Asana data into a centralized, shareable format.",
      technologies: ["Appscript", "Crelate", "Google Sheets"],
      demoUrl: "https://github.com/aldreeeny/asana-task-extractor",

      title2: "People Data Labs (PDL) API Integration",
      description2: "A Google Apps Script solution that connects to the People Data Labs API to enrich single or bulk person records with professional, contact, and social profile information. It supports up to 100 records per bulk request, includes robust error handling, and is easy to configure with a PDL API key. Designed for lead enrichment, contact database enhancement, and sales prospecting, it securely integrates enriched data into Google Sheets or other workflows.",
      technologies2: ["Appscript", "People Data Labs"],
      demoUrl2: "https://github.com/aldreeeny/pdl-api-integration",
      featured: true,
    },
    {
      title: "Copper-Asana-Google Sheets Automation",
      description: "This automation connects Copper CRM, Asana, and Google Sheets to automatically create or update Copper opportunities from Asana project data, sync custom fields, track stage changes, and log all actions for easy auditing—reducing manual work and keeping data consistent across platforms.",
      technologies: ["Appscript", "Coppper", "Google Sheets","Asana"],
      demoUrl: "https://github.com/aldreeeny/copper-asana-google-sheets-automation",

      title2: "Copper CRM Booking Integration",
      description2: "This automation links a booking system to Copper CRM via Google Apps Script, automatically creating or updating people and opportunities based on booking updates, routing actions by booking status, and logging all activity in Google Sheets for tracking and auditing.",
      technologies2: ["Appscript", "Copper"],
      demoUrl2: "https://github.com/aldreeeny/copper-crm-booking-integration",
      featured: true,
    },
    {
      title: "Copper CRM Contact Management Automation",
      description: "This Google Apps Script automation updates Copper CRM contact types based on deal status changes (Won or Lost), processing all contacts linked to a company, categorizing them as current or past customers, and logging every action in Google Sheets. It provides web app endpoints for external integrations and ensures contact type consistency automatically.",
      technologies: ["Appscript", "Coppper", "Google Sheets"],
      demoUrl: "https://github.com/aldreeeny/copper-crm-contact-automation",

      title2: "Lease Email Reminder Automation",
      description2: "This Google Apps Script automation sends lease-related email reminders (option notice dates and renewals) 10 days before and on the due date, using a Google Sheet as the data source. It runs daily via a trigger, uses HTML templates for clear communication, and logs all actions for easy tracking.",
      technologies2: ["Appscript", "Google Sheets", "Email"],
      demoUrl2: "https://github.com/aldreeeny/email-reminder",
      featured: true,
    },
    {
      title: "Data Processing and CRM Integration System",
      description: "This Google Apps Script automates employment and course duration calculations and updates Copper CRM with the results. It processes up to 5 employment records, calculates total months/years worked, computes course durations, logs all results in Google Sheets, and integrates via API to update leads and people records. The system also offers GET/POST web endpoints for external integrations and includes built-in error handling and audit logging.",
      technologies: ["Appscript", "Coppper", "Google Sheets"],
      demoUrl: "https://github.com/aldreeeny/employment-crm-integration",

      title2: "Harvest Leave Request Automation",
      description2: "This Google Apps Script automation sends lease-related email reminders (option notice dates and renewals) 10 days before and on the due date, using a Google Sheet as the data source. It runs daily via a trigger, uses HTML templates for clear communication, and logs all actions for easy tracking.",
      technologies2: ["Appscript", "Harvest", "Google Sheets", "Email"],
      demoUrl2: "https://github.com/aldreeeny/harvest-leave-request-automation",
      featured: true,
    },
    {
      title: "Property Management Analytics Dashboard",
      description: "This automation builds a real-time property management analytics dashboard by pulling data from multiple Google Sheets, tracking unit vacancies, rental applications, and manager performance, and generating daily reports with occupancy, application, and status metrics for property managers.",
      technologies: ["Appscript", "Google Sheets"],
      demoUrl: "https://github.com/aldreeeny/property-management-analytics",

      title2: "Insurance Expiration Tracker with Asana Integration",
      description2: "This automation tracks property insurance expiration dates from Google Sheets and integrates with Asana to automatically create and categorize tasks for missing, expired, or soon-to-expire policies, preventing duplicates and ensuring timely renewals through date-based logic and web triggers.",
      technologies2: ["Appscript", "Asana", "Google Sheets"],
      demoUrl2: "https://github.com/aldreeeny/insurance-expiration-tracker",
      featured: true,
    },
    {
      title: "Keap CRM Multi-Region Data Integration",
      description: "This Google Apps Script integrates multi-region Keap CRM data (Australia, New Zealand, USA, Baltic EU, Canada) with Google Sheets, automating the extraction, filtering, and processing of contacts, companies, products, emails, and affiliates. It supports dynamic custom fields, region-specific analytics, and an interactive sidebar for calculations, enabling real-time syncing and streamlined business reporting across all regions.",
      technologies: ["Appscript", "Keap CRM"],
      demoUrl: "https://github.com/aldreeeny/keap-crm-multi-region-integration",

      title2: "Monthly Employment Duration Updater",
      description2: "A Google Apps Script automation that keeps employment duration in Copper CRM up to date by adding 1 month to the “Total Employment Months” field for all leads and people every month. It integrates directly with Copper’s API, handles large datasets with pagination, logs all updates to Google Sheets for auditing, and only processes records with existing employment month values—ensuring accurate, consistent, and fully automated tracking without manual work.",
      technologies2: ["Appscript", "Copper"],
      demoUrl2: "aldreeeny/monthly-employment-updater",
      featured: true,
    },
    {
      title: "Ontraport Data Studio Community Connector",
      description: "A Google Data Studio Community Connector that links your Ontraport account to Data Studio, enabling you to pull data from multiple Ontraport endpoints (Contacts, Forms, Messages, Landing Pages, Appointments) for custom reporting and visualization. It’s built on Google Apps Script, supports easy deployment, and requires only your API Key and App ID for setup.",
      technologies: ["Appscript", "Ontraport", "Google Data Studio (Looker Studio)"],
      demoUrl: "https://github.com/aldreeeny/ontraport-data-studio-community-connector",

      title2: "Ontraport to Google Sheets Automation",
      description2: "A Google Apps Script that pulls Ontraport Appointments and Contacts via API, organizes them into Google Sheets by date ranges, consolidates and deduplicates records, and optionally exports processed data to BigQuery for advanced analysis.",
      technologies2: ["Appscript", "Ontraport", "Google Sheets", "BigQuery"],
      demoUrl2: "https://github.com/aldreeeny/ontraport-to-sheet",
      featured: true,
    },
    {
      title: "PDF Report Data Extractor",
      description: "A Google Apps Script solution that uses OCR to extract financial and sales data from retail store PDF reports, organizes it into Google Sheets, and integrates wage data. Supports multiple store locations, processes summaries and gross profit by product category, and provides a custom menu for easy store-specific updates.",
      technologies: ["Appscript", "Ontraport", "Google Sheets" , "BigQuery"],
      demoUrl: "https://github.com/aldreeeny/pdf-report-extractor",

      title2: "Xero Accounting Data Extractor",
      description2: "A Google Apps Script automation that connects to Xero via OAuth2, extracts accounting data (invoices, transactions, reports, etc.) with pagination support, and writes it to structured Google Sheets for analysis and reporting",
      technologies2: ["Appscript", "Xero ", "Google Sheets"],
      demoUrl2: "https://github.com/aldreeeny/xero-accounting-extractor",
      featured: true,
    }
  ];
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm" style={{ backgroundColor: '#172133' }}>
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg" alt="Make.com Logo" className="mx-auto mb-4 w-24 h-24" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Appscript Projects</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Appscript projects that showcase my skills in automating workflows and integrating various applications.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Projects</h2>
            
            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>

                  {/* 1st Project */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <ExternalLink size={18} />
                          View GitHub
                        </a>
                      </div>
                    </div>
                  </div>


                 {/* 2nd Project */}
         
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title2}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description2}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies2.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a 
                          href={project.demoUrl2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <ExternalLink size={18} />
                          View GitHub
                        </a>
                      </div>
                    </div>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppscriptProjects;