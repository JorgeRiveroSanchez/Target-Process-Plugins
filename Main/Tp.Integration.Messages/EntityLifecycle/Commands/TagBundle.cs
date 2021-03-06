// 
// Copyright (c) 2005-2010 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 
using System;
using Tp.Integration.Common;

namespace Tp.Integration.Messages.EntityLifecycle.Commands
{
	[Serializable]
	public class CreateTagBundleCommand : CreateEntityCommand<TagBundleDTO>
	{
		public CreateTagBundleCommand(TagBundleDTO dto) : base(dto)
		{
		}
	}

	[Serializable]
	public class UpdateTagBundleCommand : UpdateEntityCommand<TagBundleDTO>
	{
		public UpdateTagBundleCommand(TagBundleDTO dto) : base(dto)
		{
		}

		public UpdateTagBundleCommand(TagBundleDTO dto, Enum[] changedFields) : base(dto, changedFields)
		{
		}
	}

	[Serializable]
	public class DeleteTagBundleCommand : DeleteEntityCommand<TagBundleDTO>
	{
		public DeleteTagBundleCommand(int id) : base(id)
		{
		}
	}
}