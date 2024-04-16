<?php

namespace App\Repository;

use App\Entity\ToolsParameter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ToolsParameter>
 *
 * @method ToolsParameter|null find($id, $lockMode = null, $lockVersion = null)
 * @method ToolsParameter|null findOneBy(array $criteria, array $orderBy = null)
 * @method ToolsParameter[]    findAll()
 * @method ToolsParameter[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ToolsParameterRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ToolsParameter::class);
    }

    //    /**
    //     * @return ToolsParameter[] Returns an array of ToolsParameter objects
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

    //    public function findOneBySomeField($value): ?ToolsParameter
    //    {
    //        return $this->createQueryBuilder('t')
    //            ->andWhere('t.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
