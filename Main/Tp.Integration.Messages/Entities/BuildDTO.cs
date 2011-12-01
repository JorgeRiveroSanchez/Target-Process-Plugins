﻿//-----------------------------------------------------------------------------
// This code was generated by a tool.
// Changes to this file will be lost if the code is regenerated.
//-----------------------------------------------------------------------------
using System;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
    /// <summary>
    /// Data Transfer object of Build. Represents build in specific project..
    /// </summary>
	[Serializable]
	public partial class BuildDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return BuildID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				BuildID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Build ID.
        /// </summary>
        /// <value>The Build ID.</value>
		[PrimaryKey]
		public int? BuildID { get; set; }
		

		/// <summary>
        /// Gets or sets the Name. Entity name or title
        /// </summary>
        /// <value>The Name.</value>
		public String Name { get; set; }

		/// <summary>
        /// Gets or sets the Description. Entity description
        /// </summary>
        /// <value>The Description.</value>
		public String Description { get; set; }

		/// <summary>
        /// Gets or sets the Start Date. For example, start date of the iteration. Relevant for Iteration, Project, Release.
        /// </summary>
        /// <value>The Start Date.</value>
		public DateTime? StartDate { get; set; }

		/// <summary>
        /// Gets or sets the End Date. For example, end date of the iteration. Relevant for Iteration, Project, Release.
        /// </summary>
        /// <value>The End Date.</value>
		public DateTime? EndDate { get; set; }

		/// <summary>
        /// Gets or sets the Create Date. Date when entity has been created
        /// </summary>
        /// <value>The Create Date.</value>
		public DateTime? CreateDate { get; set; }

		/// <summary>
        /// Gets or sets the Modify Date. Date when entity has been modified
        /// </summary>
        /// <value>The Modify Date.</value>
		public DateTime? ModifyDate { get; set; }

		/// <summary>
        /// Gets or sets the Last Comment Date. Last comment date
        /// </summary>
        /// <value>The Last Comment Date.</value>
		public DateTime? LastCommentDate { get; set; }

		/// <summary>
        /// Gets or sets the Numeric Priority. Calculated priority of entity. Valid for UserStory and Bug for now
        /// </summary>
        /// <value>The Numeric Priority.</value>
		public Double? NumericPriority { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field1. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field1.</value>
		public String CustomField1 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field2. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field2.</value>
		public String CustomField2 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field3. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field3.</value>
		public String CustomField3 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field4. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field4.</value>
		public String CustomField4 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field5. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field5.</value>
		public String CustomField5 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field6. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field6.</value>
		public String CustomField6 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field7. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field7.</value>
		public String CustomField7 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field8. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field8.</value>
		public String CustomField8 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field9. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field9.</value>
		public String CustomField9 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field10. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field10.</value>
		public String CustomField10 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field11. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field11.</value>
		public String CustomField11 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field12. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field12.</value>
		public String CustomField12 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field13. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field13.</value>
		public String CustomField13 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field14. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field14.</value>
		public String CustomField14 { get; set; }

		/// <summary>
        /// Gets or sets the Custom Field15. Reserved property for custom field
        /// </summary>
        /// <value>The Custom Field15.</value>
		public String CustomField15 { get; set; }

		/// <summary>
        /// Gets or sets the Build Date. Date of the build
        /// </summary>
        /// <value>The Build Date.</value>
		public DateTime? BuildDate { get; set; }
		
		/// <summary>
        /// Gets or sets the Last Comment User ID. User who added last comment
        /// </summary>
        /// <value>The Last Comment User ID.</value>
		[ForeignKey]
		public Int32? LastCommentUserID { get; set; }
		
		/// <summary>
        /// Gets or sets the Parent Project ID. Project which entity belongs to
        /// </summary>
        /// <value>The Parent Project ID.</value>
		[ForeignKey]
		public Int32? ParentProjectID { get; set; }
		
		/// <summary>
        /// Gets or sets the Owner ID. Person who added the entity
        /// </summary>
        /// <value>The Owner ID.</value>
		[ForeignKey]
		public Int32? OwnerID { get; set; }
		
		/// <summary>
        /// Gets or sets the Last Editor ID. Person who edited entity last time
        /// </summary>
        /// <value>The Last Editor ID.</value>
		[ForeignKey]
		public Int32? LastEditorID { get; set; }
		
		/// <summary>
        /// Gets or sets the Iteration ID. Build may belong to Iteration. Optional
        /// </summary>
        /// <value>The Iteration ID.</value>
		[ForeignKey]
		public Int32? IterationID { get; set; }
		
		/// <summary>
        /// Gets or sets the Release ID. Build may belong to Release. Optional
        /// </summary>
        /// <value>The Release ID.</value>
		[ForeignKey]
		public Int32? ReleaseID { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Parent Project Name. Project which entity belongs to
        /// </summary>
        /// <value>The Parent Project Name.</value>
		[RelationName]
		public virtual string ParentProjectName { get; set; }
		
		/// <summary>
        /// Gets or sets the Entity Type Name. Type of the entity. For example, Bug, TestCase, Task
        /// </summary>
        /// <value>The Entity Type Name.</value>
		[RelationName]
		public virtual string EntityTypeName { get; set; }
		
		/// <summary>
        /// Gets or sets the Iteration Name. Build may belong to Iteration. Optional
        /// </summary>
        /// <value>The Iteration Name.</value>
		[RelationName]
		public virtual string IterationName { get; set; }
		
		/// <summary>
        /// Gets or sets the Release Name. Build may belong to Release. Optional
        /// </summary>
        /// <value>The Release Name.</value>
		[RelationName]
		public virtual string ReleaseName { get; set; }
		
	}
	
	
	/// <summary>
    /// Build fields
    /// </summary>
	public enum BuildField
	{
        /// <summary>
        /// Name
        /// </summary>		
		Name,
        /// <summary>
        /// Description
        /// </summary>		
		Description,
        /// <summary>
        /// Start Date
        /// </summary>		
		StartDate,
        /// <summary>
        /// End Date
        /// </summary>		
		EndDate,
        /// <summary>
        /// Create Date
        /// </summary>		
		CreateDate,
        /// <summary>
        /// Modify Date
        /// </summary>		
		ModifyDate,
        /// <summary>
        /// Last Comment Date
        /// </summary>		
		LastCommentDate,
        /// <summary>
        /// Numeric Priority
        /// </summary>		
		NumericPriority,
        /// <summary>
        /// Custom Field1
        /// </summary>		
		CustomField1,
        /// <summary>
        /// Custom Field2
        /// </summary>		
		CustomField2,
        /// <summary>
        /// Custom Field3
        /// </summary>		
		CustomField3,
        /// <summary>
        /// Custom Field4
        /// </summary>		
		CustomField4,
        /// <summary>
        /// Custom Field5
        /// </summary>		
		CustomField5,
        /// <summary>
        /// Custom Field6
        /// </summary>		
		CustomField6,
        /// <summary>
        /// Custom Field7
        /// </summary>		
		CustomField7,
        /// <summary>
        /// Custom Field8
        /// </summary>		
		CustomField8,
        /// <summary>
        /// Custom Field9
        /// </summary>		
		CustomField9,
        /// <summary>
        /// Custom Field10
        /// </summary>		
		CustomField10,
        /// <summary>
        /// Custom Field11
        /// </summary>		
		CustomField11,
        /// <summary>
        /// Custom Field12
        /// </summary>		
		CustomField12,
        /// <summary>
        /// Custom Field13
        /// </summary>		
		CustomField13,
        /// <summary>
        /// Custom Field14
        /// </summary>		
		CustomField14,
        /// <summary>
        /// Custom Field15
        /// </summary>		
		CustomField15,
        /// <summary>
        /// Build Date
        /// </summary>		
		BuildDate,
        /// <summary>
        /// Last Comment User ID
        /// </summary>		
		LastCommentUserID,
        /// <summary>
        /// Parent Project ID
        /// </summary>		
		ParentProjectID,
        /// <summary>
        /// Owner ID
        /// </summary>		
		OwnerID,
        /// <summary>
        /// Last Editor ID
        /// </summary>		
		LastEditorID,
        /// <summary>
        /// Iteration ID
        /// </summary>		
		IterationID,
        /// <summary>
        /// Release ID
        /// </summary>		
		ReleaseID,
        /// <summary>
        /// Parent Project Name
        /// </summary>		
		ParentProjectName,
        /// <summary>
        /// Entity Type Name
        /// </summary>		
		EntityTypeName,
        /// <summary>
        /// Iteration Name
        /// </summary>		
		IterationName,
        /// <summary>
        /// Release Name
        /// </summary>		
		ReleaseName,
	}
}