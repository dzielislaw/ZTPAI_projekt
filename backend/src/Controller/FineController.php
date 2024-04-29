<?php

namespace App\Controller;

use App\Entity\Fine;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class FineController extends AbstractController
{
//    #[Route('/api/fine/{id}', name: 'app_fine', methods: 'GET')]
//    public function getById(EntityManagerInterface $entityManager, $id): Response
//    {
//        $fine = $entityManager->getRepository(Fine::class)->find($id);
//        return $this->json(
//            $fine,
//            headers: ['Content-Type:' => 'application/json;charset=UTF-8']
//        );
//    }
//
//    #[Route('/api/fine', name: 'app_fine_client')]
//    public function getByClient(EntityManagerInterface $entityManager, $client): Response
//    {
//        // TODO
//        return $this->json('kek');
//    }
}
