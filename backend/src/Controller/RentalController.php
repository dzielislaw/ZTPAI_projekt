<?php

namespace App\Controller;

use App\Entity\Rental;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class RentalController extends AbstractController
{
//    #[Route('/api/rental/{id}', name: 'app_rental', methods: 'GET')]
//    public function getRentalById(EntityManagerInterface $entityManager, $id): Response
//    {
//        $rental = $entityManager->getRepository(Rental::class)->find($id);
//
//        return $this->json(
//            $rental,
//            headers: ['Content-Type:' => 'application/json;charset=UTF-8']
//        );
//    }
}
