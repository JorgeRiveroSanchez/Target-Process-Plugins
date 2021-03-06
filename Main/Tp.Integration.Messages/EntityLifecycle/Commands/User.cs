// 
// Copyright (c) 2005-2010 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 
using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateUserCommand : CreateEntityCommand<UserDTO>
	{
		public CreateUserCommand(UserDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateUserCommand : UpdateEntityCommand<UserDTO>
	{
		public UpdateUserCommand(UserDTO dto) : base(dto)
		{
		}

		public UpdateUserCommand(UserDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteUserCommand : DeleteEntityCommand<UserDTO>
	{
		public DeleteUserCommand(int id) : base(id)
		{
		}
	}
}