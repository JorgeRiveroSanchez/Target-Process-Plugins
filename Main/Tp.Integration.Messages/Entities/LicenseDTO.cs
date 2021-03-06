//-----------------------------------------------------------------------------
// This code was generated by a tool.
// Changes to this file will be lost if the code is regenerated.
//-----------------------------------------------------------------------------
using System;
using System.Xml.Serialization;using System.Runtime.Serialization;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
    /// <summary>
    /// Data Transfer object of License. Represents License.
	/// TargetProcess system usage only
    /// </summary>
	[Serializable][DataContract]
	public partial class LicenseDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return LicenseID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				LicenseID = value;
			}
		}

        /// <summary>
        /// Gets or sets the License ID.
        /// </summary>
        /// <value>The License ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? LicenseID { get; set; }
		

		/// <summary>
        /// Gets or sets the License Key. License Key
        /// </summary>
        /// <value>The License Key.</value>
		[DataMember][XmlElement(Order = 4)]public String LicenseKey { get; set; }

		/// <summary>
        /// Gets or sets the Last Update Date. Last Update Date
        /// </summary>
        /// <value>The Last Update Date.</value>
		[DataMember][XmlElement(Order = 5)]public DateTime? LastUpdateDate { get; set; }

		/// <summary>
        /// Gets or sets the Content. Content
        /// </summary>
        /// <value>The Content.</value>
		[DataMember][XmlElement(Order = 6)]public Byte[] Content { get; set; }
		

		
	}
	
	
	/// <summary>
    /// License fields
    /// </summary>
	public enum LicenseField
	{
        /// <summary>
        /// License Key
        /// </summary>		
		LicenseKey,
        /// <summary>
        /// Last Update Date
        /// </summary>		
		LastUpdateDate,
        /// <summary>
        /// Content
        /// </summary>		
		Content,
	}
}
