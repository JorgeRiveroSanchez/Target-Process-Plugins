﻿// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 
namespace Tp.Integration.Messages.EntityLifecycle
{
	/// <summary>
	/// Marker interface to indicate that a class represents a command that can be sent to TargetProcess.
	/// </summary>
	public interface ITargetProcessCommand : ITargetProcessMessage
	{
	}
}