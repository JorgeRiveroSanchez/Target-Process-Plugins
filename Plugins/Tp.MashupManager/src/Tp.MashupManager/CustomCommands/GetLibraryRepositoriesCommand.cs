﻿// 
// Copyright (c) 2005-2013 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System;
using Tp.Integration.Messages;
using Tp.Integration.Messages.Commands;
using Tp.MashupManager.CustomCommands.Args;

namespace Tp.MashupManager.CustomCommands
{
	public class GetLibraryRepositoriesCommand : LibraryCommand<LibraryCommandArg>
	{
		protected override PluginCommandResponseMessage ExecuteOperation(LibraryCommandArg commandArg)
		{
			return new PluginCommandResponseMessage { PluginCommandStatus = PluginCommandStatus.Succeed, ResponseData = Library.GetRepositories().Serialize() };
		}

		public override string Name
		{
			get { return "GetLibraryRepositories"; }
		}
	}
}