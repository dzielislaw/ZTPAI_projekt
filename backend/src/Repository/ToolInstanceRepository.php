<?php

namespace App\Repository;

use App\Entity\ToolInstance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ToolInstance>
 *
 * @method ToolInstance|null find($id, $lockMode = null, $lockVersion = null)
 * @method ToolInstance|null findOneBy(array $criteria, array $orderBy = null)
 * @method ToolInstance[]    findAll()
 * @method ToolInstance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ToolInstanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ToolInstance::class);
    }

    //    /**
    //     * @return ToolInstance[] Returns an array of ToolInstance objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('t')
    //            ->andWhere('t.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('t.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?ToolInstance
    //    {
    //        return $this->createQueryBuilder('t')
    //            ->andWhere('t.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
