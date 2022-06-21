#nullable disable

using MegaChatRoom.Messages.Repositories.Base;

namespace MegaChatRoom.Messages.Factories.Base
{
    public abstract class BaseRepositoryFactory<T> : IBaseRepositoryFactory<T> where T : IRepository
    {
        private string _connectionString { get; set; }
        private string _dbKey { get; set; }

        public abstract string DatabaseName { get; }
        public abstract string ContainerName { get; }
        public abstract string PartitionKeyPath { get; }

        public Task<T> CreateAsync()
        {
            throw new NotImplementedException();
        }
    }
}

#nullable restore
